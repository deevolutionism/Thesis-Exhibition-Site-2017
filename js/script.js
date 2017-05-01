"use strict"

var data = [
  {
    'id':'adam',
    'name': 'Adam McBride',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'PlanR',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Smartphones have transformed the way that most people communicate and interact. A great deal of in-person interaction has been replaced with virtual interactions, leaving people connected virtually, but ultimately separated by the very devices that are supposed to be bringing them together. The PlanR app intends to show how, with a simple shift in user experience design approach, an app can both connect people virtually and in the real world, but without the pretense of other dating or “hookup” apps.',
    'photo_urls': ''
  },
  {
    'id':'zanzie',
    'name': 'Alexander Addington White',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'zanzies title',
    'project_description': 'zanzies description',
    'photo_urls':[],
    'instagram':'',
    'github':'',
    'portfolio_website':'',
  },
  {
    'id':'adam',
    'name': 'Adam McBride',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Untitled',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Null',
    'photo_urls': ''
  },
  {
    'id':'andrew',
    'name': 'Andrew Benson',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Untitled',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Null',
    'photo_urls': ''
  },
  {
    'id':'danny',
    'name': 'Danny Dang',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Untitled',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Null',
    'photo_urls': ''
  },
  {
    'id':'elizabeth',
    'name': 'Elizabeth Peralta',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Sancocho: Between Here & There',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': '“Sancocho: Between Here & There,” is a multimedia project elaborating the complexity of identity in the Afro-Caribbean communities of NYC. Focusing on people of Puerto Rican and Dominican descent through their stories issues surrounding self image, discrimination, colorism, and heteronormativity are discussed through conversation. The project explores the impact of immigration on the individual\'s perception of who they are.',
    'photo_urls': ''
  },
  {
    'id':'enayet',
    'name': 'Enayet Kabir',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Untitled',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'The individually specific ornamentation of rickshaws and the raw spirituality of Baul music, are two of the most vibrant cultural traditions unique to Bangladesh. The organic flow of Rickshaw and Baul culture, sits in stark contrast to the hard lines of the warped, grid locked structure of Dhaka city. By processing these motifs through warped digital grid structures and feedback loops, this project aims to reflect on the feeling of these endangered traditions being processed through the industrial churn of Dhaka city. For the average Rickshaw Wallah (Bengali for rickshaw driver) or Baul, there is seldom a sense of home.',
    'photo_urls': ''
  },
  {
    'id':'gentry',
    'name': 'Gentry Demchak',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Switch Feed',
    'instagram':'',
    'github':'https://github.com/deevolutionism',
    'portfolio_website':'https://gentrydemchak.com',
    'project_description': 'Switch Feed is a browser extension that adds an anonymous posting board to your Facebook News Feed. It\'s meant to pop users outside of their comfortable social bubbles and place them in a liberating space where other Switch Feed Facebook users can chat, share and engaged with each other on topics ranging from politics, technology, Q/A, sports, and others.',
    'photo_urls': ''
  },
  {
    'id':'jasmine',
    'name': 'Jasmine Martinez',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Tale Rush',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Tale Rush is an instance based running game in which you explore fairy tales as Yan, a girl that can blurs the lines between reality, and the fantasy of the words written in books. Being one of the best runners in her own world, jumping in the book and running is her way to make the clock move forward for fairy tales to come alive. Interacting with fairy tales by running through their described worlds is how Yan helps the fairy tales reach a happy ending.',
    'photo_urls': ''
  },
  {
    'id':'johnny',
    'name': 'Johnny Dunn',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Emoter',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Emoter is a customizable chatbot incorporating a sentiment (emotion) analyzer built from classifying film and literature dialog, so that the bot is able to empathize with users and deliver better responses. The interaction in this work, "It’s a poor sort..", was created by mining my personal Facebook messages to train the bot with my personality. I stopped using Facebook two years ago, making this representation a reflection of my past self in the form of a conversation.',
    'photo_urls': ''
  },
  {
    'id':'kate',
    'name': 'Katherine Wallace',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Zer',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Zer is a virtual reality game that aims to provide kids with the toolset they need to recognize fake news. The child plays the role of an evil scientist creating fake news articles. Their goal is to get the article to go viral. By reverse engineering the components that go into a fake article, the child is learning how to recognize false information online. Our goal is to increase kids digital literacy through play.',
    'photo_urls': ''
  },
  {
    'id':'keiji',
    'name': 'Keiji Kimura',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Untitled',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Null',
    'photo_urls': ''
  },
  {
    'id':'kim',
    'name': 'Kim Koehler',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Untitled',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'Null',
    'photo_urls': ''
  },
  {
    'id':'marco',
    'name': 'Marco Weibel',
    'profile_photo_url':'',
    'bio_statement':'Marco is a creative | designer | thinker | mover | shaker who is currently based in New York City. Originally from Singapore, he is pursuing his BFA at Parsons School of Design, in Design & Technology. He graduates in May 2017. His interest lie in Graphic Design/Layouts, Generative/Algorhythmic Art, Video Art, Audio/Visual projects/installations, working with interactive spaces as well as most things music related. Besides freelancing as a creative, Marco is also core member of music label Darker Than Wax, which has been pushing the boundaries of leftfield electronic music for the past 6 years. He manages the operations of the label in the US, handling event curation to merchandising. He also contributes to the creative output of the label in the form of designs / artworks / web content / and visuals. Having a deep passion for music, Marco is a resident DJs for Darker Than Wax and co-host 2 of the labels radio shows, "Darker Than Wax FM", weekly on The Lot Radio in Greenpoint, Brooklyn, every Saturday, and "We Move", a monthly broadcast recorded live at Red Bull Arts NY and aired on Radar Radio in London.',
    'project_title': 'Curation to Creation',
    'instagram':'https://www.instagram.com/marcoweibel/',
    'github':'',
    'portfolio_website':'https://www.marcoweibel.com',
    'project_description': 'Curation to Creation is an exploration of unconventional processes and techniques within the realm of live electronic music performance to develop an original and personal workflow that allows for innovation and improvisation. My goal is to explore a mix of tools, methods, and hardware that compliment my own existing skill set of Deejaying but push the boundaries of performance into a new realm of uniqueness.',
    'photo_urls':''
  },
  {
    'id':'orien',
    'name': 'Orien Longo',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Climb',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': '"Climb" is a third-person exploration game set in an alien world. You play as Avian, of the Bird People. We find Avian ascending an ancient tower, where more might be discovered as to who they are, and more importantly why they are climbing. This prototype is a starting point for conversations about the ability to "be present", our place in the greater and smaller perceptual universe, and the human need to know our own limits.',
    'photo_urls': ''
  },
  {
    'id':'rafi',
    'name': 'Rafael Alam',
    'profile_photo_url':'',
    'bio_statement':'Rafi, born Rafael Emilio Alam Encarnacion, is a game designer and developer with an emphasis on world building. Using both traditional and experimental controllers and mechanics, Rafi creates experiences inspired by both art and life. As a designer that’s proficient in programming, 2D/3D art and animation, with a background in cinematography, special effects and music, he has a deep understanding of technical limitations and roles that all team members play within the development cycle. Rafi is a Dominican-American New York City native with design sense, a passion in game design, and in the pursuit of knowledge. He strives to create aesthetically beautiful experiences with an emphasis on the pursuit of fun. Rafi is currently in the Design and Technology BFA program at Parsons School of Design, majoring in Game Design. His work has been exhibited in the Parsons Student Showcase, and various events promoting the university.',
    'project_title': 'All-City & Don\'t Bite Me Bro!',
    'instagram':'https://www.instagram.com/rafiemilio',
    'twitter':'https://twitter.com/muifwego',
    'github':'',
    'portfolio_website':'http://rafialam.com',
    'project_description': 'Null',
    'photo_urls': ''
  },
  {
    'id':'juno',
    'name': 'Shiqi Shen',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Untitled',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'The Mindful Gym is an immersive environment tailored to those suffering from symptoms of anxiety. The main objective of The Mindful Gym is to engage the senses through lighting, smell, and physical space, creating an atmosphere most conducive to achieving a state of relaxation and concentrated mindfulness.',
    'photo_urls': ''
  },
  {
    'id':'sean',
    'name': 'Sean',
    'profile_photo_url':'',
    'bio_statement':'',
    'project_title': 'Emissions Interface',
    'instagram':'',
    'github':'',
    'portfolio_website':'',
    'project_description': 'My project is an interactive informational web-based tool focusing on electrical energy sources and their related emissions. The major goals for my work are: making the information more accessible through user input, making the results simple to understand through data visualization, and the promotion of critical comparison of energy sources through interaction and manipulation. The project is intended to be used in the educational/classroom domain, with a specific age group of high school to university',
    'photo_urls': ''
  },
  {
    'id':'yumeng',
    'name': 'Yumeng Wang',
    'profile_photo_url':'',
    'bio_statement':'Yumeng uses design as a critical brush to paint the narratives of where digital technology may lead us in the future. She makes interactive installations, websites, and algorithmically generated art. Yumeng is also one of the coolest people in DT.',
    'project_title': 'KAIR (Klapaucius Artificial Intelligence Resort) 2030',
    'instagram':'https://www.instagram.com/yumeng03',
    'github':'',
    'portfolio_website':'http://yumeng-wang.com',
    'project_description': 'KAIR (Klapaucius Artificial Intelligence Resort) 2030 is a multimedia interactive installation with monologues from future emulation workers in the year of 2030. Through an uncanny narrative of a recreational resort for Artificial Intelligence designed by human experts, KAIR 2030 speculates on new types of relationships between human and Artificial Intelligence, if we can lift the anthropocentric expectations for A.I. - imposing human characteristics and measuring their capacities based on human knowledge.',
    'photo_urls': ''
  }
]

var showPeopleFinder = () => {
  console.log('show')
  $('#modal-container').css('transform','scale(1.0)')
}

var hidePeopleFinder = () => {
  console.log('hide')
  $('#modal-container').css('transform','scale(0.0)')
}

var hideProjectWindow = () => {
  console.log('hide project window')
  $('#profile-container').css('transform','scale(0.0)')
  $('#project-window-menu').toggle()
}

var closeNotification = () => {
  $('#draggable').css('transform','scale(0.0)');
}

// $('.ui.modal')
// .modal('show')
// ;
$(document).ready( () => {

  $( function() {
      $( "#draggable" ).draggable({scroll:false, cursor:"crosshair"});
  } );

  attachEventListeners()

})

var attachEventListeners = () => {
  console.log('building event listeners')
  for(let i = 0; i < data.length; i++){
    console.log(data[i])
    document.getElementById(data[i].id).onclick = () => {
      $('#name').text(data[i].name)
      $('#project_description').text(data[i].project_description)
      $('#project_title').text(data[i].project_title)
      $('#profile-container').css('transform','scale(1.0)')
      $('#project-window-menu').toggle();
    }
  }
}

$("#ticker01").liScroll({travelocity: 0.15});
