import "./styles.css";

document.querySelector("#app").innerHTML = `
  <section class="app-shell" aria-label="KCS institute portal">
    <div class="content">
      <header>
        <p class="eyebrow">Knowledge of Computer &amp; Science</p>
        <h1>Run your institute from one place.</h1>
        <p class="subtitle">
          Admissions, courses, batches and fees for Knowledge of Computer &amp; Science
          — all live and in sync.
        </p>
      </header>

      <button class="primary-button" type="button" id="staff-login">
        Staff sign in
      </button>

      <nav class="module-list" aria-label="Institute modules">
        <button class="module-card" type="button" data-module="admissions">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M3 10.2 12 5l9 5.2-9 5.2-9-5.2Z"/><path d="M7 12.4v4.3c2.9 2.4 7.1 2.4 10 0v-4.3"/></svg>
          </span>
          <span>Admissions &amp; students</span>
        </button>
        <button class="module-card" type="button" data-module="courses">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/><path d="M4.8 4.8 3 3"/><path d="M19.2 4.8 21 3"/></svg>
          </span>
          <span>Courses &amp; batches</span>
        </button>
        <button class="module-card" type="button" data-module="fees">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M15 15h3"/></svg>
          </span>
          <span>Fees &amp; receipts</span>
        </button>
      </nav>

      <address class="contact">
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>
          <span>Near Bharat Petrol Pump, 1st Floor of Priyanka Jewellers Building,<br />Sonki, Darbhanga - 846009, Bihar, India</span>
        </div>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 3H4.8A1.8 1.8 0 0 0 3 4.8 16.2 16.2 0 0 0 19.2 21a1.8 1.8 0 0 0 1.8-1.8v-2.7l-4-1-1.2 2.3a12.2 12.2 0 0 1-8.6-8.6L9.5 8l-1-5Z"/></svg>
          <a href="tel:+919113325074">+91 91133 25074</a>
          <span aria-hidden="true">·</span>
          <a href="tel:+917070706048">+91 70707 06048</a>
        </div>
      </address>
    </div>
  </section>

  <dialog id="login-dialog">
    <button class="dialog-close" type="button" aria-label="Close">&times;</button>
    <h2>Staff sign in</h2>
    <form id="login-form">
      <label>
        Email or staff ID
        <input name="staff" type="text" autocomplete="username" required />
      </label>
      <label>
        Password
        <input name="password" type="password" autocomplete="current-password" required />
      </label>
      <button class="primary-button dialog-submit" type="submit">Continue</button>
    </form>
  </dialog>
`;

const dialog = document.querySelector("#login-dialog");
document.querySelector("#staff-login").addEventListener("click", () => dialog.showModal());
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll(".module-card").forEach((card) => {
  card.addEventListener("click", () => {
    dialog.showModal();
  });
});

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  dialog.close();
});
