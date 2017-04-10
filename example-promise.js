// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if(err) {
//     console.log('error',err);
//   } else {
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     },1000);
//   });
// }
//
// getTempPromise('Budapest').then(function(temp){
//   console.log('prmise success', temp);
// }, function(err){
//   console.log('prmise error', err);
//
// });

function addPromise(a,b) {
  return new Promise( function(resolve, reject){
    if (typeof a === 'number' && typeof b ==='number'){
      resolve(a+b);
    } else {
      reject('error');
    }
  }
  );
}
addPromise(1,2).then(function(num){
  console.log(num);
}, function(err){
  console.log(err);
});
addPromise(1,'aaa').then(function(num){
  console.log(num);
}, function(err){
  console.log(err);
});
