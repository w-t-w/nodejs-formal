process.on('message', msg => {
    console.log(`child!receive ${msg}!`);
    // console.log('child!said:');
    // process.send('hehehe!');
});
console.log('child!said:');
process.send('hehehe!');
