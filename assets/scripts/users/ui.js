'use strict';

const onSuccess = function (data) {
  if (data) {
    console.log(data);
}
};

const onError = function (response) {
  console.error(response);
};

const changePasswordSuccess = () => {
  console.log('password changed');
};

module.exports = {
  onSuccess,
  onError,
  changePasswordSuccess
};
