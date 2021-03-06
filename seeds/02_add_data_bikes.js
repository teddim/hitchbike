exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('bikes').del(),
    // Inserts seed entries
    knex('bikes').insert({
        owner_id: 5,
        title: "Cool bike for rent!",
        description: 'The bike works great, check it out before it\'s gone',
        picture: "http://feelgrafix.com/data_images/out/28/979576-bike.jpg",
        type: "cruiser",
        condition: 'perfect',
        price_hour: 2,
        price_day: 10,
        instructions: 'Pick it up out back by the canoe',
        street_address: '123 Packers Lane',
        city: 'milwaukee',
        state: 'WI',
        zip_code: '53202'
    }),
    knex('bikes').insert({
        owner_id: 4,
        title: "Decent bike for rent",
        description: 'It squeaks but she\'ll get you where you\'re going',
        picture: "http://feelgrafix.com/data_images/out/28/979588-bike.jpg",
        type: "street",
        condition: 'fair',
        price_hour: 7,
        price_day: 25,
        instructions: 'On the side of the house by the ladder',
        street_address: '44 Mountain Drive',
        city: 'dillon',
        state: 'CO',
        zip_code: '80435'
    }),
    knex('bikes').insert({
        owner_id: 3,
        title: 'Fine mountain bike',
        description: 'Roll down the mountains in style',
        picture: "http://www.val-gardena.net/img/_thumbnails/b/mountainbike_valgardena01.jpg",
        type: "mountain",
        condition: 'gently used',
        price_day: 30,
        instructions: 'Climb up the mountain. It\'s at the top',
        is_available: false,
        is_borrowed: true,
        street_address: '4500 North St.',
        city: 'philadelphia',
        state: 'PA',
        zip_code: '19019'
    }),
    knex('bikes').insert({
        owner_id: 2,
        title: "Coolest bike on this site, without question.",
        description: 'This bike was manufactured in the forest by small gnomes. They worked tirelessly to complete this bike. They were paid, that\'s for sure. Good benefits. Really wonderful bike with no imperfections anywhere',
        picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTND0vPNpIrhlYnxkofvvRysM2r6BGHcWz4-3JwHXr2EBibcaSR1A",
        type: "unknown",
        condition: 'godly',
        price_day: 2,
        instructions: 'Knock three times on the rock near the waterfall in the canyon',
        street_address: '2500 Pine St.',
        city: "boulder",
        state: 'CO',
        zip_code: '80302'
    }),
    knex('bikes').insert({
        owner_id: 1,
        title: "Granny bike",
        description: "Slow, but proud",
        picture: "https://bellsandwhistlesdotme.files.wordpress.com/2014/04/grazel-in-all-her-glory-e1397482993541.jpg",
        type: "cruiser",
        condition: "modest",
        price_hour: 1,
        price_day: 5,
        instructions: "Ask the blind man on the porch",
        is_available: false,
        is_borrowed: true,
        street_address: '220 Brightwood St.',
        city: "san antonio",
        state: 'TX',
        zip_code: '78209'
    })
  );
};
