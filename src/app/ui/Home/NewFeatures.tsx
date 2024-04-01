import Image from 'next/image';

const newFeatures = [
  {
    name: '¡Bienvenido a Stock Wise Works V1!',
    description:
      'Descubre la primera versión de nuestro software, diseñada para simplificar la gestión de inventarios y servicios. En esta versión inicial, te damos la bienvenida a un mundo de posibilidades para tu empresa. En el futuro, puedes esperar mejoras significativas, como informes de descarga de facturas en PDF, funciones de usuario más avanzadas y la incorporación de un lector de códigos de barras en dispositivos móviles para una mayor comodidad.',
    date: '16/12/2023',
    imageSrc: '/Images/Home/CapturaV1.png',
    imageSizes: {
      width: 953.33,
      height: 562.66,
    },
    improvements: [
      'Sistema de Inventarios: Administra eficientemente tus existencias con nuestra nueva funcionalidad de control de inventarios.',
      'Servicios: Ahora puedes incorporar servicios a tu oferta, ampliando tus opciones y mejorando la atención al cliente.',
      'Cotizaciones: Simplifica el proceso de cotización, generando propuestas rápidas y precisas para tus clientes.',
      'Generación de Facturas: Crea facturas de manera sencilla y profesional directamente desde nuestro software.',
      'Configuración de la Compañía: Personaliza la experiencia según tus necesidades con características CRUD para tipos de producto, tipos de cliente y clientes.',
    ],
  },
  {
    name: '¡Bienvenido a Stock Wise Works V1.1!',
    description:
      'Descubre la última versión de nuestro software, diseñada para simplificar la gestión de inventarios y servicios. En esta actualización, hemos incorporado nuevas funciones para hacer tu experiencia aún más intuitiva y eficiente. A continuación, te presentamos las mejoras destacadas:',
    date: '28/01/2024',
    imageSrc: '/Images/Home/CapturaV1.1.png',
    imageSizes: {
      width: 953.33,
      height: 562.66,
    },
    improvements: [
      'Descarga la Aplicación Web Progresiva: Ahora, puedes acceder fácilmente al software sin complicaciones mediante la descarga de la aplicación web progresiva.',
      'Módulo de Inventario: Descarga de Códigos de Barras: Simplificamos el proceso permitiéndote descargar fácilmente los códigos de barras asociados a tus productos.',
      'Módulo de Inventario: Generación de Códigos de Barras Aleatorios: Agregamos la posibilidad de generar códigos de barras aleatorios al crear nuevos productos.',
      'Módulo de Inventario: Archivado de Productos: Ahora, puedes archivar productos para evitar que aparezcan en la página de venta.',
      'Módulo de Inventario: Visualización de Stock en Metros: Te ofrecemos la capacidad de ver la cantidad total de metros en stock por producto.',
      'Módulo de Inventario: Creación de Productos sin Medición en Metros: Introducimos la opción de crear productos que no se midan por metros.',
      'Módulo de Cotizaciones: Registro de Pagos: Ahora, puedes ver los pagos realizados asociados a tus cotizaciones.',
      'Módulo de Cotizaciones: Descarga de Recibos de Cotización: Facilitamos la obtención de recibos descargables directamente desde el software.',
      'Módulo de Cotizaciones: Archivado de Cotizaciones: La nueva función de archivado te permite organizar y gestionar mejor tus cotizaciones.',
      'Módulo de Cotizaciones: Filtros de Búsqueda: Hemos agregado filtros para facilitar la búsqueda y localización de cotizaciones específicas.',
      'Nuevo Módulo de Seguimiento: Presentamos un módulo exclusivo para el seguimiento de cotizaciones pendientes de pago, brindándote una visión clara de las transacciones en curso.',
    ],
  },
];

export default function NewFeatures() {
  return (
    <div className="container-transparent my-5 mx-24">
      {[...newFeatures].reverse().map((item) => (
        <>
          <div className="w-full flex flex-row">
            <div className="relative w-[18%] border-r-2 border-primary text-primary pt-14">
              <span className="flex items-center justify-end w-full h-fit">
                {item.date} <span className="border-t-2 w-3 ml-2 border-primary" />
              </span>
            </div>
            <div className="p-16">
              <Image src={item.imageSrc} alt="" width={item.imageSizes.width} height={item.imageSizes.height} className="rounded-3xl" />
              <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
                <div className="lg:max-w-lg mt-8 mb-5">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">{item.name}</h1>
                </div>
                <p>{item.description}</p>
                <ul className="mt-8 space-y-8 text-white">
                  <li className="flex gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none">
                      <circle cx="15.5" cy="15.5" r="15.5" fill="#EBB093" />
                    </svg>
                    <span>Mejoras</span>
                  </li>
                </ul>
                <ul className="list-disc ml-7 mt-3 space-y-1">
                  {item.improvements.map((improvement) => (
                    <li key={improvement}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
