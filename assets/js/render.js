"use strict";

const cardContainer = document.querySelector("#root");
const cardList = data.map((place) => createPlaceCards(place));

cardContainer.append(...cardList);

function createPlaceCards(place) {
  return createElement(
    "li",
    { classNames: ["cardWrapper"] },
    createElement(
      "article",
      { classNames: ["cardContainer"] },
      createImageWrapper(place),
      createContentWrapper(place)
    )
  );
}

function createImageWrapper({ name, profilePicture }) {
  const img = createElement("img", {
    classNames: ["cardImage"],
    handlers: {
      error: handleImageError,
      load: handleImageLoad,
    },
  });
  img.src = profilePicture;
  img.hidden = true;

  const imageWrapper = createElement(
    "div",
    {
      classNames: ["cardImageWrapper"],
    },
    createElement(
      "div",
      { classNames: ["initials"] },
      document.createTextNode(name[0] || "")
    ),
    img
  );
  imageWrapper.style.backgroundColor = stringToColor(name || "");

  return imageWrapper;
}

function createContentWrapper({ name, description }) {
  return createElement(
    "div",
    {
      classNames: ["contentWrapper"],
    },
    createElement(
      "h3",
      { classNames: ["cardName"] },
      document.createTextNode(name || "")
    ),
    createElement(
      "p",
      { classNames: ["cardDescription"] },
      document.createTextNode(description || "")
    )
  );
}

/**
 *
 * @param {string} tagName
 * @param {object} param1
 * @param {string[]} options.classNames - css classes
 * @param {object} options.handlers - event handlers
 * @param  {...Node} children
 * @returns {HTMLElement}
 */
function createElement(tagName, { classNames, handlers = {} }, ...children) {
  const elem = document.createElement(tagName);
  elem.classList.add(...classNames);

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }

  elem.append(...children);
  return elem;
}

/* EVENT HANDLERS */

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({ target }) {
  target.hidden = false;
}

/* Utils */

function stringToColor(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
