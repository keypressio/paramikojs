var chalk = require('chalk'),
figlet = require('figlet');

module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'src/kryptos/kryptos.js',
					'src/kryptos/Cipher/AES.js',
					'src/kryptos/Cipher/Blowfish.js',
					'src/kryptos/Cipher/DES3.js',
					'src/kryptos/Cipher/ARC4.js',
					'src/kryptos/Hash/baseHash.js',
					'src/kryptos/Hash/SHA.js',
					'src/kryptos/Hash/SHA256.js',
					'src/kryptos/Hash/MD5.js',
					'src/kryptos/Hash/HMAC.js',
					'src/kryptos/PublicKey/RSA.js',
					'src/kryptos/PublicKey/DSA.js',
					'src/kryptos/Random/_UserFriendlyRNG.js',
					'src/kryptos/Random/Fortuna/SHAd256.js',
					'src/kryptos/Random/Fortuna/FortunaAccumulator.js',
					'src/kryptos/Random/Fortuna/FortunaGenerator.js',
					'src/kryptos/Random/OSRNG/browser.js',
					'src/common.js',
					'src/python_shim.js',
					'src/BigInteger.js',
					'src/agent.js',
					'src/auth_handler.js',
					'src/ber.js',
					'src/channel.js',
					'src/client.js',
					'src/compress.js',
					'src/dsskey.js',
					'src/file.js',
					'src/hostkeys.js',
					'src/kex_gex.js',
					'src/kex_group1.js',
					'src/kex_group14.js',
					'src/message.js',
					'src/packet.js',
					'src/pkey.js',
					'src/rsakey.js',
					'src/sftp_attr.js',
					'src/sftp_client.js',
					'src/sftp_file.js',
					'src/sftp.js',
					'src/ssh_exception.js',
					'src/transport.js',
					'src/util.js',
					'src/win_pageant.js'
				],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		paths: {
			src: 'src',
			dist: 'dist',
		},
		uglify: {
			dist: {
				options: {
					mangle: false,
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					sourceMap: true,
			        sourceMapIncludeSources: true,
				},
				files: [{
					expand: true,
					cwd: 'dist/',
					src: '<%= pkg.name %>.js',
					dest: 'dist/'
				}]
			}
		},
  	});

	grunt.registerTask('build', [
		'concat'
	]);

	grunt.registerTask('default', 'Help menu', function() {
		console.log('');
		console.log('paramiko-js');
		console.log(chalk.gray('=================================================\n'));

		console.log('  '+chalk.black.underline.bgWhite(' grunt build   ')+'\t: Builds production ready code');
	});
};
