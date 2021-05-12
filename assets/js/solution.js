"use strict";

const root = document.getElementById("root");
let responseData = [];
fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    responseData.push(...data);
    const cardList = responseData.map((place) => createCards(place));
    root.append(...cardList);
  })
  .catch((e) => {
    console.log(e);
  });

function createCards(place) {
  return createElement(
    "li",
    { classNames: ["cardWrapper"] },
    createElement(
      "article",
      { classNames: ["cardContainer"] },
      createImageWrapper(place),
      createNameWrapper(place),
      // createSocialWrapper(place)
    )
  );
}

function createImageWrapper({ firstName, profilePicture }) {
  const img = createElement("img", {
    classNames: ["cardImage"],
    attributes: { src: profilePicture, hidden: true },
    handlers: {
      error: handleImageError,
      load: handleImageLoad,
    },
  });
  const imgContainer = createElement(
    "div",
    {
      classNames: ["cardImageWrapper"],
    },
    document.createTextNode(firstName[0] || ""),
    img
  );
  imgContainer.style.backgroundColor = stringToColor(firstName || "");
  return imgContainer;
}

function createNameWrapper({ firstName, lastName }) {
  const name = createElement("h3", {
    classNames: ["cardName"],
  });
  name.innerText = firstName.concat(" ").concat(lastName).trim();
  return createElement(
    "div",
    {
      classNames: ["contentWrapper"],
    },
    name
  );
}

function createSocialWrapper({ contacts }) {
  const socialWrapper = createElement("div", {
    classNames: ["socialWrapper"],
  });

  for (let contact of Object.entries(contacts)) {
    const url = new URL(contact[1]);
    const iconContainer = createElement("div", {
      classNames: ["socialIconContainer"],
    });
    const icon = createElement("i", {
      classNames: createBtn(url.hostname).split(" "),
    });
    const link = createElement("a", { attributes: { href: url } }, icon);
    iconContainer.append(link);
    socialWrapper.append(iconContainer);
  }
  return socialWrapper;
}

function createBtn(str) {
  switch (str) {
    case "www.facebook.com":
      return socialIcons.facebook;
    case "www.instagram.com":
      return socialIcons.instagram;
    case "twitter.com":
      return socialIcons.twitter;
    default:
      return socialIcons.unknown;
  }
}

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({ target }) {
  target.hidden = false;
}

/**
 *
 * @param {string} tagName
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {object} options.handlers - event handlers
 * @param  {...Node} children
 * @returns {HTMLElement}
 */
function createElement(
  tagName,
  { classNames = [], handlers = {}, attributes = {} } = {},
  ...children
) {
  const elem = document.createElement(tagName);
  elem.classList.add(...classNames);

  // const attr = {
  //   src: "htpps://example.com",
  //   value: "text",
  //   name: "textInput",
  // };

  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }

  elem.append(...children);
  return elem;
}

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
