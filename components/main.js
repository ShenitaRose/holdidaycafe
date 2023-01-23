import Image from "next/image"

const incentives = [
    {
      name: '30 types of coffee to choose from',
      imageSrc: '/images/illustrations/coffee.png',
      description: "Each coffee is brewed to perfection to guarantee the most devine and succulent tastes",
    },
    {
      name: 'Original Coffee',
      imageSrc: '/images/illustrations/coffee-beans.png',
      description: "Our coffee beans are grown on our own farms and hand picked for the best quality.",
    },
    {
      name: 'Ambient Music',
      imageSrc: '/images/illustrations/guitar.png',
      description:
        "Not only is the coffee amazing, the cafe provides the perfect ambience for an amazing experience",
    },
    {
        name: 'Great Treats',
        imageSrc: '/images/illustrations/pie.png',
        description:
          "Along with you coffee, you can try a selection of homemade sweet treats that are guaranteed to have your tastebuds melting",
      },
  ]
  
  export default function Main() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-100 px-6 py-16 sm:p-16">
            <div className="mx-auto max-w-xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Welcome to our cafe!
                </h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div className="sm:flex-shrink-0">
                      <div className="flow-root">
                        <Image className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" width={500} height={500}/>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                      <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }