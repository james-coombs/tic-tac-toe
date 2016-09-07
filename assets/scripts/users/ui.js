'use strict';

const onSuccess = function (data) {
  if (data.users) {
    console.log(data.users);
  } else {
    console.table(data.users);
  }
};

const onError = function (response) {
  console.error(response);
};

module.exports = {
  onSuccess,
  onError,
};
