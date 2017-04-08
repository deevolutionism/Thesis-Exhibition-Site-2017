var camera, scene, renderer, composer;
var object, light;
var glitchPass;
init();
animate();
function updateOptions() {
	var wildGlitch = document.getElementById('wildGlitch');
	glitchPass.goWild=wildGlitch.checked;
}
function init() {
	renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.autoClearColor = false;
	document.body.appendChild( renderer.domElement );
	//
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 400;
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
	object = new THREE.Object3D();
	scene.add( object );
  var colors = [ 0x000000, 0xff0080, 0x8000ff, 0xffffff ];
	var geometry = new THREE.SphereGeometry( 1, 3, 3 );
	// var material = new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } );
  // var material = new THREE.PointsMaterial( {
  //    size: 1,
  //    vertexColors: THREE. VertexColors,
  //    depthTest: false,
  //    opacity: 1,
  //    sizeAttenuation: false,
  //    transparent: true
  // } );
  var material = new THREE.MeshNormalMaterial();
  // geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );

  // var material = new THREE.MeshPhongMaterial( {
	// 					color: 0xaaaaaa, specular: 0xffffff, shininess: 250,
	// 					side: THREE.DoubleSide, vertexColors: THREE.VertexColors
	// 			} );

	for ( var i = 0; i < 100; i ++ ) {
    // material = new THREE.PointsMaterial( {
    //   size: 1,
    //   vertexColors: THREE. VertexColors,
    //   depthTest: false,
    //   opacity: 0.2,
    //   sizeAttenuation: false,
    //   transparent: true
    // });
    // geometry.colors.push( new THREE.Color( colors[ Math.floor( Math.random() * colors.length ) ] ) );
    // geometry.colors.push( new THREE.Color( colors[ Math.floor( Math.random() * colors.length ) ] ) );
		// material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random(), shading: THREE.FlatShading } );
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
		mesh.position.multiplyScalar( Math.random() * 400 );
		mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
		mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
		object.add( mesh );
	}
	scene.add( new THREE.AmbientLight( 0x222222 ) );
	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 1, 1, 1 );
	scene.add( light );
	// postprocessing
	composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );
	glitchPass = new THREE.GlitchPass();
	glitchPass.renderToScreen = true;
	composer.addPass( glitchPass );
	//
	window.addEventListener( 'resize', onWindowResize, false );
	updateOptions();
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	composer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
	requestAnimationFrame( animate );
	var time = Date.now();
	object.rotation.x += 0.005;
	object.rotation.y += 0.01;
	composer.render();
	//renderer.render(scene, camera);
}
