/** Pointer-based grab/swipe navigation without turning a drag into a card click. */
export function attachGalleryDrag(gallery, { getStepWidth, onDragStart, onDrag, onNavigate, onCancel }) {
  let gesture = null;
  let suppressClick = false;

  function reset() {
    const previous = gesture;
    gesture = null;
    gallery.classList.remove('is-dragging');
    if (previous?.target.hasPointerCapture(previous.id)) {
      previous.target.releasePointerCapture(previous.id);
    }
  }

  function cancel() {
    if (!gesture) return false;
    const wasDragging = gesture.dragging;
    suppressClick = wasDragging;
    reset();
    if (wasDragging) onCancel();
    return true;
  }

  gallery.addEventListener('pointerdown', event => {
    if (!event.isPrimary) { cancel(); return; }
    if (event.button !== 0 || gesture || gallery.closest('[inert]')) return;
    const card = event.target.closest('.kpi');
    if (!card || card.inert) return;
    suppressClick = false;
    gesture = {
      id: event.pointerId, target: card, x: event.clientX, y: event.clientY,
      dx: 0, dragging: false, step: getStepWidth(),
    };
    card.setPointerCapture(event.pointerId);
  });

  gallery.addEventListener('pointermove', event => {
    if (!gesture || event.pointerId !== gesture.id) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (!gesture.dragging) {
      if (Math.hypot(dx, dy) < 8) return;
      // Let vertical touch scrolling win rather than navigating accidentally.
      if (Math.abs(dy) > Math.abs(dx)) {
        reset();
        suppressClick = true;
        return;
      }
      gesture.dragging = true;
      onDragStart();
      gallery.classList.add('is-dragging');
    }
    event.preventDefault();
    gesture.dx = dx;
    // A fractional slot drives every card's position, tilt and depth together.
    const progress = Math.max(-1, Math.min(1, -dx / gesture.step));
    onDrag(progress);
  });

  gallery.addEventListener('pointerup', event => {
    if (!gesture || event.pointerId !== gesture.id) return;
    const { dragging, dx, step } = gesture;
    const threshold = Math.max(35, Math.min(100, step * .2));
    suppressClick = dragging;
    reset();
    if (dragging) onNavigate(Math.abs(dx) >= threshold ? (dx < 0 ? 1 : -1) : 0);
  });

  gallery.addEventListener('pointercancel', cancel);
  gallery.addEventListener('lostpointercapture', event => {
    if (gesture?.id === event.pointerId) cancel();
  });
  gallery.addEventListener('click', event => {
    // Preserve Enter/assistive activation, and allow the next genuine tap.
    if (suppressClick && event.detail !== 0) {
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressClick = false;
    }
  }, true);
  gallery.addEventListener('dragstart', event => event.preventDefault());
  window.addEventListener('blur', cancel);

  return { cancel };
}
