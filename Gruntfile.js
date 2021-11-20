module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		postcss: {
			options: {
				map: false,
				processors: [require('autoprefixer')()],
			},
			dist: {
				src: [
					'dist/jupiterui.css',
					'example/src/jupiterui.css'
				],
			},
		},
		sass: {
			options: {
				'no-source-map': 'off',
			},
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
					'dist/jupiterui.css': 'src/jupiterui.scss',
					'example/src/jupiterui.css': 'src/jupiterui.scss',
				},
			},
		},
		concat: {
			'example/src/jupiterui.css': ['src/header.css', 'dist/jupiterui.css'],
			'dist/jupiterui.css': ['src/header.css', 'dist/jupiterui.css'],
		},
		watch: {
			compile_css: {
				files: ['src/**/*.scss'],
				tasks: ['sass'],
			},
		},
	});

	grunt.loadNpmTasks('@lodder/grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', [
		'postcss',
		'sass',
		'watch',
		'concat',
	]);
};
