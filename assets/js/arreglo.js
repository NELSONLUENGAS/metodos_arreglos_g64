let propiedades_alquiler = [
    {
        id: 1,
        nombre: 'Casa en el bosque',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion:
            'Acogedora casa en medio del bosque con vistas espectaculares.',
        ubicacion: 'Bosque de los Cerezos',
        habitaciones: 3,
        costo: 1500,
        smoke: false,
        pets: true,
    },
    {
        id: 2,
        nombre: 'Departamento en la ciudad',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion:
            'Moderno departamento en el corazón de la ciudad, cerca de todas las comodidades.',
        ubicacion: 'Centro Urbano',
        habitaciones: 2,
        costo: 2000,
        smoke: true,
        pets: false,
    },
    {
        id: 3,
        nombre: 'Chalet en la montaña',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion:
            'Encantador chalet con vistas a las montañas, ideal para amantes de la naturaleza.',
        ubicacion: 'Sierra Nevada',
        habitaciones: 4,
        costo: 1800,
        smoke: false,
        pets: true,
    },
    {
        id: 4,
        nombre: 'Loft en el centro histórico',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion:
            'Amplio loft con diseño moderno en el corazón del casco antiguo.',
        ubicacion: 'Centro Histórico',
        habitaciones: 1,
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        id: 5,
        nombre: 'Casa de campo',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion: 'Tranquila casa de campo rodeada de naturaleza y aire puro.',
        ubicacion: 'Valle Verde',
        habitaciones: 3,
        costo: 1600,
        smoke: false,
        pets: false,
    },
    {
        id: 6,
        nombre: 'Apartamento junto al mar',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion:
            'Acogedor apartamento con vistas al mar y acceso directo a la playa.',
        ubicacion: 'Costa Azul',
        habitaciones: 2,
        costo: 2200,
        smoke: true,
        pets: true,
    },
    {
        id: 7,
        nombre: 'Casa adosada en urbanización',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion:
            'Cómoda casa adosada con jardín en una tranquila urbanización.',
        ubicacion: 'Residencial Las Palmeras',
        habitaciones: 3,
        costo: 1700,
        smoke: false,
        pets: true,
    },
    {
        id: 8,
        nombre: 'Piso céntrico reformado',
        src: 'https://source.unsplash.com/random/1600x900/?nature,water',
        descripcion:
            'Luminoso piso recién reformado en una zona céntrica y bien comunicada.',
        ubicacion: 'Avenida Principal',
        habitaciones: 2,
        costo: 1900,
        smoke: true,
        pets: false,
    },
];


const pets_container = document.getElementById('allow_pets_list')

function handleRenderData() {
    pets_container.innerHTML = ''

    propiedades_alquiler.forEach((casa) => pets_container.innerHTML += `
        <div>
            <p>${casa.id}</p>
            <label for="allow_pets_${casa.id}">Permitir mascotas</label>
            <input type="checkbox" name="${casa.id}" id="allow_pets_${casa.id}" onchange="handleCheck(event)" ${casa.pets ? 'checked' : ''}>
            <hr>
            <button id="${casa.id}" onclick="handleDelete(event)">X</button>
        </div>`)
}

handleRenderData();

function handleCheck(event) {
    const id = Number(event.target.name)
    const isChecked = event.target.checked

    propiedades_alquiler = propiedades_alquiler.map((casa) => casa.id === id ? { ...casa, pets: isChecked } : casa)

    handleUpdateCount()
}

function handleAdd(event) {
    const value = document.getElementById('add').value

    propiedades_alquiler.push(
        {
            id: propiedades_alquiler.length + 1,
            nombre: value,
            src: 'https://source.unsplash.com/random/1600x900/?nature,water',
            descripcion:
                'Luminoso piso recién reformado en una zona céntrica y bien comunicada.',
            ubicacion: 'Avenida Principal',
            habitaciones: 2,
            costo: 1900,
            smoke: true,
            pets: false,
        },
    )
    console.log(propiedades_alquiler)
    // Limpiar input
    document.getElementById('add').value = ''

    handleRenderData();
    handleUpdateCount()
}

function handleDelete(event) {
    const id = Number(event.target.id)
    let allowDelete;

    propiedades_alquiler = propiedades_alquiler.filter((casa) => {

        // if (casa.id === id) {
        //     allowDelete = confirm('Quieres eliminar ?')

        //     console.log(allowDelete)
        // } else {
        //     // console.log(allowDelete)
        //     if (allowDelete === false) {
        //         return false
        //     } else {
        //         return true

        //     }
        // }
        return casa.id !== id
    })

    console.log(propiedades_alquiler)
    handleRenderData();
    handleUpdateCount()
}


function handleUpdateCount() {
    const cantidad = propiedades_alquiler.length

    const hechas = propiedades_alquiler.reduce((count, casa) => {

        if (casa.pets) {
            return count += 1
        } else {
            return count
        }

    }, 0)


    document.getElementById('cantidad').innerHTML = cantidad
    document.getElementById('hechas').innerHTML = hechas
}

handleUpdateCount()


