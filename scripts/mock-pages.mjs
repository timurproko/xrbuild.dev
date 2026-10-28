globalThis.fetch = async (url) => {
  if (String(url).endsWith('/pages')) return new Response(JSON.stringify({ build_type: 'workflow', cname: 'xrbuild.dev', https_enforced: true, html_url: 'https://xrbuild.dev/' }), { status: 200 });
  throw new Error(`unexpected test fetch: ${url}`);
};
