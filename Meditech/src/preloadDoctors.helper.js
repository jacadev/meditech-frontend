const preloadDoctors = [
  {
    user_name: "mariat23",
    email: "mariat.2389@gmail.com",
    password: "string crifrado",
    first_name: "Maria Teresa",
    last_name: "Carrillo Mendez",
    phone: ["956 256 222"],
    age: 80,
    gender: "Femenino",
    about_me:
      "Me caracterizo porque mi pacientes siempre son mi prioridad, y me esfuerzo por darles la mejor atencion que se merecen",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-31-1.jpg",
    tuition_code: "CMP 15265",
    consultation_cost: 25.5,
    location: {
      city: "Bogota",
      country: "Colombia",
      address: "Calle San Camilo",
    },
    diseases_treated: ["Diabetes", "Hipertensión", "Insuficencia Venosa"],
    specialties: [1, 2],
    rol_id: [1],
  },
  {
    user_name: "dra_ana",
    email: "dra_ana@gmail.com",
    password: "xhfae#92",
    first_name: "Ana",
    last_name: "García",
    phone: ["555-555-5555"],
    age: 45,
    gender: "Femenino",
    about_me:
      "Me dedico a brindar el mejor cuidado a mis pacientes y ayudarles en su bienestar y salud sexual.",
    profile_image:
      "https://2.bp.blogspot.com/-qWTzZWZwWe4/W4f_DFB9rqI/AAAAAAAAeE8/ydwLzKYhLJkpz6pdA6EM47dGEas3CeehgCLcBGAs/s1600/3%2BDSC_1583a.jpg",
    tuition_code: "GOG 89635",
    consultation_cost: 35.25,
    location: {
      city: "Cali",
      country: "México",
      address: "Calle de la Salud",
    },
    diseases_treated: [
      "Infecciones Vaginales",
      "Cáncer Cervical",
      "Embarazo de Alto Riesgo",
    ],
    specialties: [3, 4],
    rol_id: [1],
  },
  {
    user_name: "doctor_jose",
    email: "jose_dentista@hotmail.com",
    password: "A#u2l9rF7",
    first_name: "José",
    last_name: "Ramírez",
    phone: ["123-456-7890"],
    age: 55,
    gender: "Masculino",
    about_me:
      "Me dedico a brindar la mejor atención dental posible y ayudar a mis pacientes a alcanzar sus objetivos dentales.",
    profile_image:
      "https://st.depositphotos.com/1003098/3929/i/600/depositphotos_39296605-stock-photo-cancer-specialist-smiling-in-hospital.jpg",
    tuition_code: "DMC 75821",
    consultation_cost: 35.99,
    location: {
      city: "Medellin",
      country: "México",
      address: "Av. Principal #123",
    },
    diseases_treated: ["Caries", "Gingivitis", "Sensibilidad dental"],
    specialties: [5, 6],
    rol_id: [1],
  },
  {
    user_name: "doctor_ana",
    email: "ana_ginecologa@gmail.com",
    password: "S#9fN2d8z",
    first_name: "Ana",
    last_name: "Martínez",
    phone: ["0987654321"],
    age: 66,
    gender: "Femenino",
    about_me:
      "Me dedico a brindar la mejor atención ginecológica y obstétrica posible, y ayudar a mis pacientes a mantener su salud y bienestar.",
    profile_image:
      "https://www.minneapolisheadshots.com/gallery/main/audiologist-headshot.jpg",
    tuition_code: "CMP 27916",
    consultation_cost: 50.5,
    location: {
      city: "Cartagena",
      country: "Ecuador",
      address: "Av. Principal #456",
    },
    diseases_treated: [
      "Infecciones vaginales",
      "Embarazo",
      "Cáncer de ovarios",
    ],
    specialties: [7, 34],
    rol_id: [1],
  },
  {
    user_name: "joseperez",
    email: "joseperez@hotmail.com",
    password: "cadenaencriptada",
    first_name: "José",
    last_name: "Pérez López",
    phone: ["753 456 789", "541 234 567"],
    age: 89,
    gender: "Masculino",
    about_me:
      "Soy un profesional comprometido con la salud bucal de mis pacientes, y busco brindar un tratamiento personalizado y de calidad.",
    profile_image:
      "https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1573492422363-K8FFCA73TJTHRXB36E54/physician+headshot.jpg",
    tuition_code: "COL 48219",
    consultation_cost: 50.0,
    location: {
      city: "Barranquilla",
      country: "España",
      address: "Carrer de Provença",
    },
    diseases_treated: ["Carillas dentales", "Brackets", "Implantes dentales"],
    specialties: [32, 22],
    rol_id: [1],
  },
  {
    user_name: "johndoe",
    email: "johndoe@gmail.com",
    password: "senhaencriptada",
    first_name: "John",
    last_name: "Doe",
    phone: ["123 456 789"],
    age: 32,
    gender: "Masculino",
    about_me:
      "Soy un psicólogo que se enfoca en el bienestar emocional de mis pacientes, y busco ayudarles a encontrar la mejor solución a sus problemas.",
    profile_image:
      "https://t4.ftcdn.net/jpg/03/30/44/33/360_F_330443300_0HS1ORxxeeBpAAA65YxpHOLMhfiTZGDP.jpg",
    tuition_code: "PSI 37584",
    consultation_cost: 35.0,
    location: {
      city: "Bogota",
      country: "Estados Unidos",
      address: "5th Ave",
    },
    diseases_treated: ["Ansiedad", "Depresión", "Trastornos del sueño"],
    specialties: [3, 65],
    rol_id: [1],
  },
  {
    user_name: "pablovargas",
    email: "pablovargas@gmail.com",
    password: "contraseñaencriptada",
    first_name: "Pablo",
    last_name: "Vargas",
    phone: ["555 123 456", "555 987 654"],
    age: 45,
    gender: "Masculino",
    about_me:
      "Soy un cirujano que se enfoca en brindar una atención médica de calidad y en ayudar a mis pacientes a mejorar su calidad de vida mediante procedimientos quirúrgicos seguros y eficaces.",
    profile_image:
      "https://www.proheadshots.ca/wp-content/uploads/2016/02/doctors-headshot.jpg",
    tuition_code: "CG 27893",
    consultation_cost: 50.0,
    location: {
      city: "Cali",
      country: "España",
      address: "Calle de Alcalá",
    },
    diseases_treated: [
      "Hernias",
      "Cálculos biliares",
      "Enfermedades del colon",
    ],
    specialties: [53, 3],
    rol_id: [1],
  },
  {
    user_name: "carlabravo",
    email: "cbravo@gmail.com",
    password: "contraseñaencriptada",
    first_name: "Carla",
    last_name: "Bravo",
    phone: ["123 888 789"],
    age: 54,
    gender: "Femenino",
    about_me:
      "Me considero una pediatra comprometida con mis pacientes, enfocada en brindarles la mejor atención posible y ayudarlos a mejorar su salud. Mi especialidad en neumología pediátrica me permite tratar enfermedades respiratorias en niños con la mejor tecnología disponible.",
    profile_image:
      "https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg",
    tuition_code: "PM 3569483",
    consultation_cost: 15.0,
    location: {
      city: "Medellin",
      country: "Chile",
      address: "Avenida Providencia",
    },
    diseases_treated: ["Asma", "Bronquitis", "Neumonía"],
    specialties: [34, 22],
    rol_id: [1],
  },
  {
    user_name: "josearaujo",
    email: "jose.araujo@gmail.com",
    password: "contraseñaencriptada",
    first_name: "José",
    last_name: "Araujo",
    phone: ["456 789 012", "123 456 789"],
    age: 58,
    gender: "Masculino",
    about_me:
      "Soy un cirujano comprometido con brindar la mejor atención quirúrgica a mis pacientes. Me especializo en cirugía general y de trauma, por lo que puedo atender una amplia variedad de lesiones y enfermedades quirúrgicas. Siempre trato de estar actualizado en las últimas técnicas y tecnologías para brindar la mejor atención a mis pacientes.",
    profile_image:
      "https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg",
    tuition_code: "CGT 22456",
    consultation_cost: 45.0,
    location: {
      city: "Bogota",
      country: "Argentina",
      address: "Avenida Corrientes",
    },
    diseases_treated: ["Hernias", "Apendicitis", "Fracturas"],
    specialties: [53, 23],
    rol_id: [1],
  },
  {
    user_name: "juliamorales",
    email: "juliamorales@yahoo.com",
    password: "contraseñasegura",
    first_name: "Julio",
    last_name: "Morales",
    phone: ["123 456 789"],
    age: 33,
    gender: "Masculino",
    about_me:
      "profile_imageuna dermatóloga especializada en cosmetología. Me apasiona ayudar a mis pacientes a lograr una piel saludable y radiante mediante tratamientos y procedimientos dermatológicos avanzados. También ofrezco tratamientos cosméticos como rellenos dérmicos y botox para mejorar la apariencia de la piel y reducir las arrugas y líneas de expresión. Siempre me enfoco en brindar la mejor atención y resultados a mis pacientes.",
    profile_image:
      "https://www.10x10studios.com/cms/wp-content/uploads/2020/07/Healthcare-Provider-headshot.jpg",
    tuition_code: "DMC 32587",
    consultation_cost: 60.0,
    location: {
      city: "Medellin",
      country: "México",
      address: "Calle Insurgentes",
    },
    diseases_treated: ["Acné", "Rosácea", "Eczema"],
    specialties: [45, 3],
    rol_id: [1],
  },
  {
    user_name: "joselopez",
    email: "jose.lopez@gmail.com",
    password: "myencryptedpassword",
    first_name: "Jose",
    last_name: "Lopez Hernandez",
    phone: ["311 223 4455"],
    age: 52,
    gender: "Masculino",
    about_me:
      "Soy un médico comprometido con dar la mejor atención a mis pacientes.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-35.jpg",
    tuition_code: "CMP 98765",
    consultation_cost: 30.0,
    location: {
      city: "Cali",
      country: "Colombia",
      address: "Carrera 10 #22-33"
    },
    diseases_treated: ["Gripe", "Bronquitis", "Asma"],
    specialties: [3, 5],
    rol_id: [1]
  },
  // Objeto 2
  {
    user_name: "marianacastillo",
    email: "mari_castillo@yahoo.com",
    password: "mypassword123",
    first_name: "Mariana",
    last_name: "Castillo",
    phone: ["315 569 4433"],
    age: 40,
    gender: "Femenino",
    about_me:
      "Como médica, me esfuerzo por brindar una atención personalizada a cada uno de mis pacientes.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-10.jpg",
    tuition_code: "CMP 11223",
    consultation_cost: 35.0,
    location: {
      city: "Bogota",
      country: "Colombia",
      address: "Calle 85 #20-45"
    },
    diseases_treated: ["Artritis", "Artrosis", "Dolor de espalda"],
    specialties: [2, 5],
    rol_id: [1]
  },
  // Objeto 3
  {
    user_name: "pedrogonzalez",
    email: "pgonzalez@hotmail.com",
    password: "mypasswordsecure",
    first_name: "Pedro",
    last_name: "Gonzalez",
    phone: ["318 225 9988"],
    age: 36,
    gender: "Masculino",
    about_me:
      "Soy un médico especializado en el tratamiento de enfermedades cardiovasculares.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-19.jpg",
    tuition_code: "CMP 22334",
    consultation_cost: 40.0,
    location: {
      city: "Medellin",
      country: "Colombia",
      address: "Carrera 43A #34-25"
    },
    diseases_treated: [
      "Enfermedad coronaria",
      "Hipertensión arterial",
      "Insuficiencia cardíaca"
    ],
    specialties: [1, 3],
    rol_id: [1]
  },
  // Objeto 4
  {
    user_name: "javierrodriguez",
    email: "javier_rodriguez@gmail.com",
    password: "mypassword123",
    first_name: "Javier",
    last_name: "Rodriguez",
    phone: ["310 445 6789"],
    age: 45,
    gender: "Masculino",
    about_me:
      "Soy un médico apasionado por la investigación y el avance de la medicina.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-32-1.jpg",
    tuition_code: "CMP 33645",
    consultation_cost: 28.0,
    location: {
      city: "Cali",
      country: "Colombia",
      address: "Carrera 5 #23-10"
    },
    diseases_treated: ["Cáncer", "Leucemia", "Linfoma"],
    specialties: [1, 4],
    rol_id: [1]
  },
  // Objeto 5
  {
    user_name: "andresarango",
    email: "arango_andres@yahoo.com",
    password: "myencryptedpassword",
    first_name: "Andres",
    last_name: "Arango",
    phone: ["318 448 3322"],
    age: 34,
    gender: "Masculino",
    about_me:
      "Soy un médico que cree en la importancia de mantener una buena salud mental.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-33-1.jpg",
    tuition_code: "CMP 99887",
    consultation_cost: 25.5,
    location: {
      city: "Bogota",
      country: "Colombia",
      address: "Calle 100 #15-25"
    },
    diseases_treated: ["Depresión", "Ansiedad", "Trastornos del sueño"],
    specialties: [2, 4],
    rol_id: [1]
  },
  // Objeto 6
  {
    user_name: "lucasmartinez",
    email: "lmartinez@hotmail.com",
    password: "mypasswordsecure",
    first_name: "Lucia",
    last_name: "Martinez",
    phone: ["319 567 2345"],
    age: 41,
    gender: "Femenino",
    about_me:
      "Soy un médico enfocado en el bienestar de mis pacientes y en lograr resultados efectivos.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-23.jpg",
    tuition_code: "CMP 12345",
    consultation_cost: 32.0,
    location: {
      city: "Medellin",
      country: "Colombia",
      address: "Carrera 80 #44-57"
    },
    diseases_treated: ["Problemas renales", "Infecciones urinarias", "Cálculos renales"],
    specialties: [3, 5],
    rol_id: [1]
  },
  // Objeto 7
  {
    user_name: "sofiaperez",
    email: "soperez@gmail.com",
    password: "myencryptedpassword",
    first_name: "Sofia",
    last_name: "Perez",
    phone: ["315 998 8877"],
    age: 27,
    gender: "Femenino",
    about_me:
      "Soy una médica comprometida con brindar una atención integral y personalizada a mis pacientes.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-16.jpg",
    tuition_code: "CMP 55577",
    consultation_cost: 28.5,
    location: {
      city: "Cali",
      country: "Colombia",
      address: "Carrera 10 #32-50"
    },
    diseases_treated: ["Infecciones respiratorias", "Alergias", "Neumonía"],
    specialties: [4, 5],
    rol_id: [1]
  },
  // Objeto 8
  {
    user_name: "juanrojas",
    email: "jrojas2001@hotmail.com",
    password: "mypassword123",
    first_name: "Juana",
    last_name: "Rojas",
    phone: ["317 333 7788"],
    age: 49,
    gender: "Femenino",
    about_me:
      "Soy un médico enfocado en el bienestar de cada uno de mis pacientes y en mejorar su calidad de vida.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-13.jpg",
    tuition_code: "CMP 00987",
    consultation_cost: 33.0,
    location: {
      city: "Bogota",
      country: "Colombia",
      address: "Calle 72 #15-26"
    },
    diseases_treated: ["Problemas estomacales", "Colitis", "Enfermedad de Crohn"],
    specialties: [1, 3],
    rol_id: [1]
  },
  {
    user_name: "ana_castro",
    email: "acastro@gmail.com",
    password: "pandas123",
    first_name: "Ana",
    last_name: "Castro",
    phone: ["310 555 2244"],
    age: 36,
    gender: "Femenino",
    about_me:
    "Soy una odontóloga apasionada por mantener la salud dental de mis pacientes.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-34-1.jpg",
    tuition_code: "ODN 00532",
    consultation_cost: 50.0,
    location: {
    city: "Barranquilla",
    country: "Colombia",
    address: "Cra. 48 #70-61"
    },
    diseases_treated: ["Caries", "Gingivitis", "Halitosis"],
    specialties: [1],
    rol_id: [1]
    },
    
    {
    user_name: "maria_fernandez",
    email: "mfernandez@hotmail.com",
    password: "giraffe123",
    first_name: "Mario",
    last_name: "Fernandez",
    phone: ["315 222 7766"],
    age: 58,
    gender: "Masculino",
    about_me:
    "Soy una oftalmóloga con muchos años de experiencia en el tratamiento de enfermedades visuales.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-10-1.jpg",
    tuition_code: "OFT 01245",
    consultation_cost: 70.0,
    location: {
    city: "Medellin",
    country: "Colombia",
    address: "Cra. 43a #1-50"
    },
    diseases_treated: ["Miopía", "Astigmatismo", "Cataratas"],
    specialties: [2],
    rol_id: [1]
    },
    
    {
    user_name: "julio_vargas",
    email: "jvargas@gmail.com",
    password: "penguins123",
    first_name: "Julio",
    last_name: "Vargas",
    phone: ["318 444 9988"],
    age: 42,
    gender: "Masculino",
    about_me:
    "Soy un cardiólogo comprometido con el bienestar de mis pacientes y el tratamiento de enfermedades cardiovasculares.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-37-1.jpg",
    tuition_code: "CDL 00876",
    consultation_cost: 90.0,
    location: {
    city: "Bogota",
    country: "Colombia",
    address: "Calle 72 #15-26"
    },
    diseases_treated: ["Hipertensión arterial", "Enfermedad coronaria", "Arritmias cardíacas"],
    specialties: [3],
    rol_id: [1]
    },
    
    {
    user_name: "alejandro_perez",
    email: "aperez@yahoo.com",
    password: "tigers123",
    first_name: "Alejandro",
    last_name: "Perez",
    phone: ["314 666 3322"],
    age: 31,
    gender: "Masculino",
    about_me:
    "Soy un odontólogo que se preocupa por hacer sentir cómodos y seguros a mis pacientes durante sus tratamientos.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-15-1.jpg",
    tuition_code: "ODN 03012",
    consultation_cost: 45.0,
    location: {
    city: "Cali",
    country: "Colombia",
    address: "Av. Colombia #13A-59"
    },
    diseases_treated: ["Placa dental", "Sarro", "Dientes torcidos"],
    specialties: [1],
    rol_id: [1]
    },
    
    {
    user_name: "carolina_diaz",
    email: "cdiaz@gmail.com",
    password: "puppies123",
    first_name: "Carlos",
    last_name: "Diaz",
    phone: ["311 111 5566"],
    age: 25,
    gender: "Masculino",
    about_me:
    "Soy una oftalmóloga recién graduada con muchas ganas de aprender y ayudar a las personas con problemas visuales.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-39-1.jpg",
    tuition_code: "OFT 05678",
    consultation_cost: 60.0,
    location: {
    city: "Cartagena",
    country: "Colombia",
    address: "Cl. 36 #3-70"
    },
    diseases_treated: ["Hipermetropía", "Glaucoma", "Degeneración macular"],
    specialties: [2],
    rol_id: [1]
    },
    
    {
    user_name: "daniel_jimenez",
    email: "djimenez@hotmail.com",
    password: "kittens123",
    first_name: "Daniela",
    last_name: "Jimenez",
    phone: ["317 555 7722"],
    age: 47,
    gender: "Femenino",
    about_me:
    "Soy un cardiólogo comprometido con la prevención de enfermedades cardiovasculares y la promoción de hábitos saludables.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-25-1.jpg",
    tuition_code: "CDL 01324",
    consultation_cost: 85.0,
    location: {
    city: "Barranquilla",
    country: "Colombia",
    address: "Cra. 53 #75-196"
    },
    diseases_treated: ["Insuficiencia cardíaca", "Infarto agudo de miocardio", "Aneurisma aórtico"],
    specialties: [3],
    rol_id: [1]
    },
    
    {
    user_name: "mariana_gomez",
    email: "mgomez@yahoo.com",
    password: "lions123",
    first_name: "Mariana",
    last_name: "Gomez",
    phone: ["312 444 4433"],
    age: 28,
    gender: "Femenino",
    about_me:
    "Soy una odontóloga que cree en la importancia de mantener una buena higiene dental para prevenir enfermedades bucales.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-41-1.jpg",
    tuition_code: "ODN 04032",
    consultation_cost: 55.0,
    location: {
    city: "Medellin",
    country: "Colombia",
    address: "Cra. 80 #33-114"
    },
    diseases_treated: ["Mal aliento", "Sensibilidad dental", "Infecciones de encías"],
    specialties: [1],
    rol_id: [1]
    },
    
    {
    user_name: "pedro_gutierrez",
    email: "pgutierrez@hotmail.com",
    password: "elephants123",
    first_name: "Paty",
    last_name: "Gutierrez",
    phone: ["315 777 9900"],
    age: 50,
    gender: "Femenino",
    about_me:
    "Soy un oftalmólogo que se preocupa por brindar diagnósticos precisos y tratamientos efectivos a mis pacientes.",
    profile_image:
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-42-1.jpg",
    tuition_code: "OFT 02467",
    consultation_cost: 75.0,
    location: {
    city: "Cali",
    country: "Colombia",
    address: "Calle 5 #36-26"
    },
    diseases_treated: ["Conjuntivitis", "Ojo seco", "Desprendimiento de retina"],
    specialties: [2],
    rol_id: [1]
    },


];

module.exports = preloadDoctors;