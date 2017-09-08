var bcrypt = require('bcrypt');

bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err);

		console.log("Hashing passw0rd..");
		bcrypt.hash("passw0rd", salt, (err, hash) => {
			if (err) return next(err);

			console.log('salt: %s', salt);
			console.log('hash: %s', hash);

			bcrypt.compare("password", hash, (err, match) => {
				console.log("Testing password: " + match);
			});


			bcrypt.compare("passw0rd", hash, (err, match) => {
				console.log("Testing passw0rd: " + match);
			});
		});
	});