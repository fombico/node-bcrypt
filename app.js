var bcrypt = require('bcrypt');

bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err);

		bcrypt.hash("passw0rd", salt, (err, hash) => {
			if (err) return next(err);

			console.log('salt: %s', salt);
			console.log('hash: %s', hash);
		});
	});