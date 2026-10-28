/** Shared activation feedback; never animate transforms used for scene tracking. */
export function playControlFeedback(button, motionPreference, color = '159,232,112') {
  if (motionPreference?.matches) return;
  button.getAnimations().filter(animation => animation.id === 'control-feedback').forEach(animation => animation.cancel());
  const animation = button.animate([
    { boxShadow: `inset 0 0 0 2px rgba(${color},.55)` },
    { boxShadow: `inset 0 0 0 2px rgba(${color},0)` },
  ], { duration: 650, easing: 'ease-out' });
  animation.id = 'control-feedback';
}

/** Orange action family: Full report and the round X close controls. */
export function playActionFeedback(button, motionPreference) {
  playControlFeedback(button, motionPreference, '255,185,77');
}
