import one from '../../assets/image/one.jpg'

const agent = {
  name: 'Chidinma Snaarp',
  email: 'almJawso@example.com',
  image: one
}

const Agent = () => {
  return (  
    <div className="flex  flex-col md:flex-row mx-3 mt-1 mb-[230px]">
      <figure className="md:mx-2 ml-8 md:ml-0 ">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-10 h-10 rounded-full object-cover border-4 border-blue-600"
        />
      </figure>
      <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
        <p className="text-black  mb-1 text-sm md:text-sm">
          {agent.name}
        </p>
        <p className="text-gray-500 text-xs">
          {agent.email}
        </p>
      </div>
    </div>  
  )
}

export default Agent