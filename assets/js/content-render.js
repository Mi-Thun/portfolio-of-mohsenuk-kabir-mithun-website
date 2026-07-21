/**
 * Renders window.SITE_CONTENT (assets/data/content.js) into the page.
 * Must run before main.js — main.js binds click handlers (e.g. .open-service)
 * to elements this script creates.
 */
(function () {
  "use strict";

  const C = window.SITE_CONTENT;
  if (!C) return;

  function el(tag, opts) {
    const node = document.createElement(tag);
    if (!opts) return node;
    if (opts.className) node.className = opts.className;
    if (opts.text != null) node.textContent = opts.text;
    if (opts.html != null) node.innerHTML = opts.html;
    if (opts.attrs) {
      for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
    }
    return node;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function setText(id, text) {
    const node = byId(id);
    if (node) node.textContent = text;
  }

  function setHtml(id, html) {
    const node = byId(id);
    if (node) node.innerHTML = html;
  }

  function tagChips(container, tags) {
    tags.forEach((t) => container.appendChild(el("span", { text: t })));
  }

  /* ── <head> meta ─────────────────────────────────────────── */
  document.title = C.meta.title;
  setText("pageTitle", C.meta.title);
  byId("metaDescription")?.setAttribute("content", C.meta.description);
  byId("metaKeywords")?.setAttribute("content", C.meta.keywords);
  byId("metaAuthor")?.setAttribute("content", C.meta.author);
  byId("metaOgTitle")?.setAttribute("content", C.meta.ogTitle);
  byId("metaOgDescription")?.setAttribute("content", C.meta.ogDescription);

  /* ── Nav ──────────────────────────────────────────────────── */
  setHtml("headerLogo", C.nav.logoHtml);
  const navList = byId("navList");
  if (navList) {
    C.nav.links.forEach((link) => {
      const li = el("li");
      const a = el("a", { text: link.label, attrs: { href: link.href } });
      if (link.active) a.classList.add("active");
      li.appendChild(a);
      navList.appendChild(li);
    });
  }
  const headerCta = byId("headerCta");
  if (headerCta) {
    headerCta.textContent = C.nav.ctaLabel;
    headerCta.setAttribute("href", C.nav.ctaHref);
  }

  /* ── Hero ─────────────────────────────────────────────────── */
  setText("heroNumber", C.hero.number);
  setText("heroStatusText", C.hero.status);
  setText("heroTitleLine1", C.hero.titleLine1);
  setHtml("heroTitleLine2", C.hero.titleLine2Html);
  setText("heroRole", C.hero.role);
  setHtml("heroDesc", C.hero.descHtml);
  const heroCta = byId("heroCta");
  if (heroCta) {
    heroCta.textContent = C.hero.ctaLabel;
    heroCta.setAttribute("href", C.hero.ctaHref);
  }
  const heroSocialMount = byId("heroSocialMount");
  if (heroSocialMount) {
    C.hero.socials.forEach((s) => {
      heroSocialMount.appendChild(
        el("a", { text: s.label, attrs: { href: s.href, target: "_blank", rel: "noopener" } })
      );
    });
  }
  setText("hgTitleText", C.hero.gameTitle);
  const hgStatus = byId("hgStatus");
  if (hgStatus) hgStatus.textContent = C.hero.gameStatusInitial;
  const hgScore = byId("hgScore");
  if (hgScore) hgScore.textContent = C.hero.gameScoreInitial;
  setText("heroScrollLabel", C.hero.scrollLabel);

  /* ── About ────────────────────────────────────────────────── */
  const aboutImg = byId("aboutImg");
  if (aboutImg) {
    aboutImg.src = C.about.image.src;
    aboutImg.alt = C.about.image.alt;
  }
  setText("aboutImgTagIcon", C.about.image.tagIcon);
  setText("aboutImgTagText", C.about.image.tagText);
  setText("aboutRoleBadge", C.about.roleBadge);
  setText("aboutName", C.about.name);
  setHtml("aboutLead", C.about.leadHtml);
  setHtml("aboutBody", C.about.bodyHtml);

  const aboutDetailsMount = byId("aboutDetailsMount");
  const aboutFreelanceLink = byId("aboutFreelanceLink");
  if (aboutDetailsMount && aboutFreelanceLink) {
    C.about.details.forEach((d) => {
      const row = el("div", { className: "about-detail" });
      row.appendChild(el("i", { className: d.icon }));
      row.appendChild(el("span", { text: d.text }));
      aboutDetailsMount.insertBefore(row, aboutFreelanceLink);
    });
    aboutFreelanceLink.setAttribute("href", C.about.freelance.href);
    aboutFreelanceLink.querySelector("i").className = C.about.freelance.icon;
    aboutFreelanceLink.querySelector("span").innerHTML = C.about.freelance.textHtml;
  }

  const aboutStatsMount = byId("aboutStatsMount");
  if (aboutStatsMount) {
    C.about.stats.forEach((s) => {
      const stat = el("div", { className: "stat" });
      const num = el("span", { className: "stat-num", text: s.value });
      if (s.auto && s.id) num.id = s.id;
      stat.appendChild(num);
      stat.appendChild(el("span", { className: "stat-label", text: s.label }));
      aboutStatsMount.appendChild(stat);
    });
  }

  /* ── Skills ───────────────────────────────────────────────── */
  setText("skillsSubtitle", C.skills.subtitle);
  const marqueeCoreTrack = byId("marqueeCoreTrack");
  const marqueeAccentTrack = byId("marqueeAccentTrack");
  if (marqueeCoreTrack) {
    // duplicated for the seamless CSS marquee loop
    [...C.skills.marqueeCore, ...C.skills.marqueeCore].forEach((p) => {
      marqueeCoreTrack.appendChild(el("span", { className: "skill-pill", text: p }));
    });
  }
  if (marqueeAccentTrack) {
    [...C.skills.marqueeAccent, ...C.skills.marqueeAccent].forEach((p) => {
      marqueeAccentTrack.appendChild(el("span", { className: "skill-pill accent", text: p }));
    });
  }
  const skillCategoriesMount = byId("skillCategoriesMount");
  if (skillCategoriesMount) {
    C.skills.categories.forEach((cat) => {
      const card = el("div", { className: "skill-cat" });
      card.appendChild(el("span", { className: "skill-cat-num", text: cat.num }));
      card.appendChild(el("h4", { text: cat.title }));
      card.appendChild(el("p", { text: cat.items }));
      skillCategoriesMount.appendChild(card);
    });
  }

  /* ── Developer roles ─────────────────────────────────────── */
  setText("rolesNoteIcon", C.roles.noteIcon);
  setText("rolesNoteText", C.roles.noteText);
  setHtml("rolesBottomNote", C.roles.bottomNoteHtml);
  const roleCardsMount = byId("roleCardsMount");
  if (roleCardsMount) {
    C.roles.cards.forEach((card) => {
      const wrap = el("div", { className: "role-card" });
      wrap.appendChild(el("span", { className: "role-ghost", text: card.ghostLetter, attrs: { "aria-hidden": "true" } }));

      const top = el("div", { className: "role-top" });
      const iconWrap = el("div", { className: "role-icon" });
      iconWrap.appendChild(el("i", { className: card.icon }));
      top.appendChild(iconWrap);
      top.appendChild(el("span", { className: "role-num", text: card.num }));
      wrap.appendChild(top);

      const lore = el("div", { className: "role-lore" });
      lore.appendChild(el("span", { className: "role-char", text: card.character }));
      lore.appendChild(el("span", { className: "role-char-title", text: card.characterTitle }));
      wrap.appendChild(lore);

      const divider = el("div", { className: "role-divider" });
      divider.appendChild(el("span", { text: "↓" }));
      divider.append(" " + C.roles.dividerLabel);
      wrap.appendChild(divider);

      wrap.appendChild(el("h3", { className: "role-title", text: card.title }));
      wrap.appendChild(el("p", { className: "role-desc", text: card.desc }));

      const tags = el("div", { className: "role-tags" });
      tagChips(tags, card.tags);
      wrap.appendChild(tags);

      roleCardsMount.appendChild(wrap);
    });
  }

  /* ── Selected work ────────────────────────────────────────── */
  setText("workQuipCode", C.work.quipCode);
  setHtml("workQuipText", C.work.quipTextHtml);
  const workHintIcon = byId("workHintIcon");
  if (workHintIcon) workHintIcon.className = "bi " + C.work.hintIcon;
  setText("workHintText", C.work.hintText);

  const workListMount = byId("workListMount");
  if (workListMount) {
    C.work.items.forEach((item, i) => {
      const details = el("details", { className: "work-item" });
      if (item.openByDefault) details.setAttribute("open", "");

      const summary = el("summary");
      summary.appendChild(el("span", { className: "work-index", text: String(i + 1).padStart(2, "0") }));

      const main = el("span", { className: "work-summary-main" });
      main.appendChild(el("span", { className: "work-title", html: item.title }));
      main.appendChild(el("span", { className: "work-client", text: item.client }));
      main.appendChild(el("span", { className: "work-toggle", text: "+", attrs: { "aria-hidden": "true" } }));
      summary.appendChild(main);
      summary.appendChild(el("span", { className: "work-hook", text: item.hook }));
      details.appendChild(summary);

      const body = el("div", { className: "work-body" });
      const dek = el("p", { className: "work-dek" });
      if (item.dekHtml != null) dek.innerHTML = item.dekHtml; else dek.textContent = item.dek;
      body.appendChild(dek);

      const cols = el("div", { className: "work-cols" });
      item.columns.forEach((col) => {
        const colEl = el("div", { className: "work-col" });
        colEl.appendChild(el("h4", { text: col.heading }));
        if (col.type === "list") {
          const ul = el("ul");
          col.content.forEach((li) => ul.appendChild(el("li", { html: li })));
          colEl.appendChild(ul);
        } else {
          const p = el("p");
          if (col.contentHtml != null) p.innerHTML = col.contentHtml; else p.textContent = col.content;
          colEl.appendChild(p);
        }
        cols.appendChild(colEl);
      });
      body.appendChild(cols);

      const outcome = el("p", { className: "work-outcome" });
      outcome.appendChild(el("strong", { text: "Outcome → " }));
      outcome.append(document.createRange().createContextualFragment(item.outcomeHtml));
      body.appendChild(outcome);

      const tagsWrap = el("div", { className: "work-tags" });
      tagChips(tagsWrap, item.tags);
      body.appendChild(tagsWrap);

      details.appendChild(body);
      workListMount.appendChild(details);
    });
  }

  setText("workMinorLabel", C.work.minorLabel);
  const workMinorMount = byId("workMinorMount");
  if (workMinorMount) {
    C.work.minorItems.forEach((item) => {
      const card = el("div", { className: "work-minor-item" });
      const h5 = el("h5", { text: item.title });
      if (item.repoUrl) {
        h5.appendChild(
          el("a", {
            text: "↗",
            className: "minor-repo",
            attrs: { href: item.repoUrl, target: "_blank", rel: "noopener", "aria-label": `View ${item.title} on GitHub` }
          })
        );
      }
      card.appendChild(h5);
      card.appendChild(el("p", { text: item.desc }));
      const tagsWrap = el("div", { className: "work-tags" });
      tagChips(tagsWrap, item.tags);
      card.appendChild(tagsWrap);
      workMinorMount.appendChild(card);
    });
  }
  setHtml("workMoreNote", C.work.moreNoteHtml);

  /* ── Resume ───────────────────────────────────────────────── */
  const eduMount = byId("resumeEducationMount");
  if (eduMount) {
    C.resume.education.forEach((entry) => {
      const wrap = el("div", { className: "resume-entry" });
      wrap.appendChild(el("div", { className: "resume-entry-date", text: entry.date }));
      wrap.appendChild(el("h4", { text: entry.degree }));
      wrap.appendChild(el("p", { className: "resume-entry-org", text: entry.org }));
      wrap.appendChild(el("p", { className: "resume-entry-grade", text: entry.grade }));
      wrap.appendChild(el("p", { className: "resume-entry-desc", text: entry.desc }));
      const ul = el("ul", { className: "resume-achievements" });
      entry.achievements.forEach((a) => ul.appendChild(el("li", { text: a })));
      wrap.appendChild(ul);
      eduMount.appendChild(wrap);
    });
  }

  const pubMount = byId("resumePublicationsMount");
  if (pubMount) {
    C.resume.publications.forEach((pub) => {
      const wrap = el("div", { className: "resume-entry" });
      const dateRow = el("div", { className: "resume-entry-date", text: pub.dateLabel + " " });
      if (pub.statusTag) dateRow.appendChild(el("span", { className: "pub-status", text: pub.statusTag }));
      wrap.appendChild(dateRow);
      wrap.appendChild(el("h4", { text: pub.title }));
      wrap.appendChild(el("p", { className: "resume-entry-org", html: pub.authorsHtml }));
      wrap.appendChild(el("p", { className: "resume-pub", html: pub.descHtml }));
      const links = el("div", { className: "pub-links" });
      links.appendChild(
        el("a", {
          text: pub.doiLabel,
          attrs: pub.doiHref === "#" ? { href: "#" } : { href: pub.doiHref, target: "_blank", rel: "noopener" }
        })
      );
      wrap.appendChild(links);
      pubMount.appendChild(wrap);
    });
  }

  const expMount = byId("resumeExperienceMount");
  if (expMount) {
    C.resume.experience.forEach((job) => {
      const wrap = el("div", { className: "resume-entry" });
      wrap.appendChild(el("div", { className: "resume-entry-date", text: job.date }));
      wrap.appendChild(el("h4", { text: job.role }));
      wrap.appendChild(el("p", { className: "resume-entry-org", html: job.org }));
      const ul = el("ul", { className: "resume-list" });
      job.bullets.forEach((b) => ul.appendChild(el("li", { html: b })));
      wrap.appendChild(ul);
      expMount.appendChild(wrap);
    });
  }

  /* ── Services ─────────────────────────────────────────────── */
  const fiverrHref = C.services.overlaySidebar.fiverrHref;
  const servicesCardsMount = byId("servicesCardsMount");
  if (servicesCardsMount) {
    C.services.cards.forEach((card) => {
      const wrap = el("div", { className: "service-card" });
      const top = el("div", { className: "service-top" });
      const iconWrap = el("div", { className: "service-icon" });
      iconWrap.appendChild(el("i", { className: card.icon }));
      top.appendChild(iconWrap);
      top.appendChild(el("span", { className: "service-num", text: card.num }));
      wrap.appendChild(top);
      wrap.appendChild(el("h3", { text: card.title }));
      wrap.appendChild(el("p", { text: card.desc }));

      const links = el("div", { className: "service-links" });
      links.appendChild(
        el("a", {
          text: "Read details →",
          className: "service-more open-service",
          attrs: { href: "#", "data-service": card.key }
        })
      );
      links.appendChild(
        el("a", {
          text: "Hire on Fiverr ↗",
          className: "service-hire",
          attrs: { href: fiverrHref, target: "_blank", rel: "noopener" }
        })
      );
      wrap.appendChild(links);
      servicesCardsMount.appendChild(wrap);
    });
  }

  const panelKeys = Object.keys(C.services.panels);

  const sdoNavMount = byId("sdoNavMount");
  if (sdoNavMount) {
    panelKeys.forEach((key, i) => {
      const panel = C.services.panels[key];
      const btn = el("button", {
        className: "sdo-nav-btn" + (i === 0 ? " active" : ""),
        attrs: { "data-panel": key }
      });
      btn.appendChild(el("i", { className: panel.navIcon }));
      btn.appendChild(el("span", { text: panel.navLabel }));
      sdoNavMount.appendChild(btn);
    });
  }

  setText("sdoCtaTitle", C.services.overlaySidebar.ctaTitle);
  const sdoCtaEmailLink = byId("sdoCtaEmailLink");
  if (sdoCtaEmailLink) {
    sdoCtaEmailLink.setAttribute("href", "mailto:" + C.services.overlaySidebar.email);
    sdoCtaEmailLink.querySelector("span").textContent = C.services.overlaySidebar.email;
  }
  const sdoCtaFiverrLink = byId("sdoCtaFiverrLink");
  if (sdoCtaFiverrLink) {
    sdoCtaFiverrLink.setAttribute("href", C.services.overlaySidebar.fiverrHref);
    sdoCtaFiverrLink.querySelector("span").textContent = C.services.overlaySidebar.fiverrLabel;
  }
  setText("sdoContactLink", C.services.overlaySidebar.contactLinkLabel);

  const sdoPanelsMount = byId("sdoPanelsMount");
  if (sdoPanelsMount) {
    panelKeys.forEach((key, i) => {
      const panel = C.services.panels[key];
      const wrap = el("div", {
        className: "sdo-panel" + (i === 0 ? " active" : ""),
        attrs: { "data-panel": key }
      });
      wrap.appendChild(el("h2", { className: "sdo-panel-title", text: panel.title }));
      wrap.appendChild(el("p", { className: "sdo-panel-intro", text: panel.intro }));

      const highlights = el("div", { className: "sdo-highlights" });
      panel.highlights.forEach((h) => {
        const hi = el("div", { className: "sdo-highlight" });
        hi.appendChild(el("i", { className: h.icon }));
        hi.appendChild(el("h5", { text: h.title }));
        hi.appendChild(el("p", { text: h.desc }));
        highlights.appendChild(hi);
      });
      wrap.appendChild(highlights);

      wrap.appendChild(el("h4", { className: "sdo-deliverables-title", text: "Key Deliverables" }));
      const deliverables = el("ul", { className: "sdo-deliverables" });
      panel.deliverables.forEach((d) => {
        const li = el("li");
        li.appendChild(el("i", { className: "bi bi-check-circle-fill" }));
        li.appendChild(el("span", { html: d }));
        deliverables.appendChild(li);
      });
      wrap.appendChild(deliverables);

      sdoPanelsMount.appendChild(wrap);
    });
  }

  /* ── Contact ──────────────────────────────────────────────── */
  setText("contactDesc", C.contact.desc);
  const contactInfoMount = byId("contactInfoMount");
  if (contactInfoMount) {
    C.contact.info.forEach((item) => {
      const row = el("div", { className: "contact-info-item" });
      row.appendChild(el("i", { className: item.icon }));
      row.appendChild(el("span", { text: item.text }));
      contactInfoMount.appendChild(row);
    });
  }

  const f = C.contact.form;
  byId("contactName")?.setAttribute("placeholder", f.namePlaceholder);
  setText("err-name", f.nameError);
  byId("contactEmail")?.setAttribute("placeholder", f.emailPlaceholder);
  setText("err-email", f.emailError);
  byId("contactSubject")?.setAttribute("placeholder", f.subjectPlaceholder);
  setText("err-subject", f.subjectError);
  byId("contactMessage")?.setAttribute("placeholder", f.messagePlaceholder);
  setText("err-message", f.messageError);
  setText("contactLoadingText", f.sendingLabel);
  setText("contactSuccessText", f.successMessage);
  setText("contactSubmitBtn", f.submitLabel);

  /* ── Footer ───────────────────────────────────────────────── */
  setText("footerName", C.footer.name);
  setText("footerTagline", C.footer.tagline);
  const footerSocialMount = byId("footerSocialMount");
  if (footerSocialMount) {
    C.footer.socials.forEach((s) => {
      footerSocialMount.appendChild(
        el("a", { text: s.label, attrs: { href: s.href, target: "_blank", rel: "noopener" } })
      );
    });
  }
  setText("footerCopyName", C.footer.copyName);
})();
