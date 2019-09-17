function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../public/img/icons/', true, /\.svg$/));