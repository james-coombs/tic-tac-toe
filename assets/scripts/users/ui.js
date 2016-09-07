'use strict';

const onSuccess = function (data) {
  if (data) {
    console.log(data);
}
};

const onError = function (response) {
  console.error(response);
};

module.exports = {
  onSuccess,
  onError,
};
