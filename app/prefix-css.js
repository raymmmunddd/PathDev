// app/prefix-css.js
const fs = require('fs');
const postcss = require('postcss');
const prefixer = require('postcss-prefix-selector');

// List of CSS files and their corresponding namespaces
const files = [
  { input: 'app/pathdev.css', namespace: '.landing-page' },
  { input: 'app/role/role.css', namespace: '.role-page' },
  { input: 'app/user/chat/chat.css', namespace: '.chat-page' },
  { input: 'app/user/dashboard/dashboard.css', namespace: '.dashboard-page' },
  { input: 'app/user/profile/profile.css', namespace: '.profile-page' },
  { input: 'app/user/progress/progress.css', namespace: '.progress-page' },
  { input: 'app/user/progress/[roadmapId]/roadmap-detail.css', namespace: '.roadmap-detail-page' },
  { input: 'app/user/roadmap/roadmap.css', namespace: '.roadmap-page' },
  { input: 'app/admin/analytics/analytics.css', namespace: '.analytics-page' },
  { input: 'app/admin/dashboard/dashboard.css', namespace: '.admin-dashboard-page' },
  { input: 'app/admin/profile/profile.css', namespace: '.profile-page' },
  { input: 'app/admin/roadmap/roadmap.css', namespace: '.admin-roadmap-page' },
  { input: 'app/admin/users/usermanagement.css', namespace: '.user-management-page' },
];

async function namespaceCSS(file) {
  try {
    const css = fs.readFileSync(file.input, 'utf8');

    const result = await postcss([
      prefixer({
        prefix: file.namespace,
        transform(prefix, selector, prefixedSelector) {
          // Don't prefix keyframes, @media, or :root
          if (
            selector.startsWith('@') ||
            selector === ':root'
          ) return selector;
          return prefixedSelector;
        },
      }),
    ]).process(css, { from: file.input, to: file.input.replace('.css', '-namespaced.css') });

    fs.writeFileSync(file.input.replace('.css', '-namespaced.css'), result.css);
    console.log(`✅ Namespaced ${file.input} → ${file.input.replace('.css', '-namespaced.css')}`);
  } catch (err) {
    console.error(`❌ Error processing ${file.input}`, err);
  }
}

(async () => {
  for (const file of files) {
    await namespaceCSS(file);
  }
})();
