import {Workbox, messageSW} from 'workbox-window';

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const wb = new Workbox('/service-worker.js');
    const updateButton = document.querySelector("#app-update");

    const showSkipWaitingPrompt = (event) => {
      updateButton.classList.add("show");
      updateButton.addEventListener("click", () => {
        // Set up a listener that will reload the page as soon as the previously waiting service worker has taken control.
        wb.addEventListener("controlling", event => {
          window.location.reload();
        });

        // Send a message telling the service worker to skip waiting.
        // This will trigger the `controlling` event handler above.
        wb.messageSW({ type: "SKIP_WAITING" });
      });
    }

      // Add an event listener to detect when the registered
      // service worker has installed but is waiting to activate.
      wb.addEventListener('waiting', showSkipWaitingPrompt);
      wb.addEventListener('externalwaiting', showSkipWaitingPrompt);

    wb.register();


    // navigator.serviceWorker.register('/service-worker.js').then(registration => {
    //   console.log('SW registered: ', registration);
    // }).catch(registrationError => {
    //   console.log('SW registration failed: ', registrationError);
    // });
  });
}


fetch("https://api.exchangeratesapi.io/latest")
  .then(response => {
    if (!response.ok) throw response.statusText;
    return response;
  })
  .then(response => response.json())
  .then(data => {
    const main = document.querySelector("#main");
    if (!data || !data.rates) {
      main.innerHTML = "There was an error. Please try again.";
      return false;
    }
    let html = "";

    for (const [currency, rate] of Object.entries(data.rates)) {
      html += `<article class="card card-currency">
            <div class="currency">${currency}</div>
            <div class="rate">${rate}</div>
        </article>`;
    }
    main.innerHTML = html;
  })
  .catch(error => {
    const main = document.querySelector("#main");
    main.innerHTML = "There was an error. Please try again.";
  })
;
