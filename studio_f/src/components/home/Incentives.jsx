import React from 'react'

const Incentives = () => {
  const incentives = [
    {
      name: 'Soluciones Personalizadas',
      imageSrc: 'https://images.pexels.com/photos/8199603/pexels-photo-8199603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: "Ofrecemos un enfoque personalizado en cada proyecto, asegurando que cada solución se adapte perfectamente a las necesidades específicas de tu negocio. Esto maximiza la eficacia y garantiza que obtengas exactamente lo que necesitas para crecer.",
    },
    {
      name: 'Soporte Continuo',
      imageSrc: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: "Proporcionamos un soporte post-lanzamiento excepcional para asegurar que tu producto siga funcionando sin problemas. Nuestro equipo está disponible para resolver cualquier inquietud y realizar actualizaciones, lo que te permite enfocarte en tu negocio mientras nosotros cuidamos de la tecnología.",
    },
    {
      name: 'Desarrollo Ágil y Rápido',
      imageSrc: 'https://images.pexels.com/photos/6804078/pexels-photo-6804078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
        "Implementamos metodologías ágiles que permiten una entrega rápida y eficiente de los proyectos. Esto significa que puedes ver resultados más pronto y tener un producto en el mercado en menos tiempo, lo que te da una ventaja competitiva.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Construimos nuestro negocio en base al servicio al cliente.
            </h2>
            <p className="mt-4 text-gray-500">
              Al principio, nuestro enfoque en el servicio al cliente fue fundamental para nuestro crecimiento en el desarrollo de software. A medida que avanzamos, descubrimos que podíamos expandir nuestras oportunidades innovando en nuestras soluciones y adaptando nuestras estrategias. Ahora, nos dedicamos a crear aplicaciones y plataformas que no solo se vean atractivas, sino que también proporcionen un valor real a nuestros clientes. Mantenemos un compromiso firme con la claridad y la transparencia en todos nuestros proyectos, asegurándonos de que nuestros clientes comprendan cada aspecto del desarrollo y encuentren siempre el apoyo que necesitan para llevar sus ideas a la realidad.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="w-full" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incentives