console.log('bobbyhadz.com');

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}

const attributes = {
  name: 'example',
  title: 'Box 1',
  disabled: '',
  style: 'background-color: salmon; color: white;',
};

const button = document.getElementById('btn');
setAttributes(button, attributes);
