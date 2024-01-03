
import Image from "next/image"
import banyan from '../../../public/banyan.jpg'
import cart from '../../../public/cartpic.svg'


export default function page (){


    return (
        <div className="flex w-full mx-auto bg-sky-400 h-screen gap-x-6 mt-[2rem] items-start justify-center">
        <div className="h-auto w-11/12 bg-green-200 flex">
          <div className="w-3/5 flex flex-col items-between gap-y-3">
            <Image src={banyan} alt="tree" />
            <div className="flex justify-between w-full  gap-x-3">
                <button type="button" className="bg-green-200 w-1/2 p-2 ">
                    <span> <Image src={cart} alt="tree-selling" className="h-6"/> </span>
                     Add to cart</button>
                <button type="button" className="bg-green-400 w-1/2">Buy now</button>
            </div>
          </div>
          <div className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            architecto vero? Odit fuga reiciendis temporibus rerum minima
            quisquam voluptates ducimus nulla non amet, praesentium aliquam
            voluptate quam vel distinctio? Hic similique culpa libero alias
            ipsam modi, fugiat tenetur magnam illo adipisci totam vero atque
            dolorum porro earum et quos amet tempore consectetur perspiciatis.
            Expedita voluptatum esse praesentium amet aliquid laboriosam hic
            perferendis dolor placeat laudantium quas totam dolorem voluptatem
            iste corporis exercitationem fugiat, a, tempore veniam saepe,
            officia doloribus asperiores! Ipsam molestias libero recusandae vel!
            Nesciunt itaque quod cupiditate, porro cum alias nam ea sapiente
            nihil quaerat voluptas dolor, veniam quo ut repudiandae! Expedita
            explicabo, doloremque, officiis ab eum delectus molestias quos
            perferendis ipsum sed adipisci quod provident officia? Facere
            mollitia culpa vitae beatae voluptate, quod eum voluptatum inventore
            ad aliquam architecto minus dolorum debitis quisquam autem sequi
            corrupti eos dicta veniam vel in quasi deserunt voluptas nulla.
            Atque quisquam consequuntur, provident praesentium, id tenetur omnis
            dolores sed cumque eius voluptates obcaecati adipisci nostrum
            corporis ducimus fuga. Similique eum, libero consectetur facilis
            quisquam distinctio, alias nemo sapiente fugiat magni reprehenderit
            explicabo reiciendis ad cupiditate, porro beatae. Velit dolorem
            omnis voluptatem alias? Facere necessitatibus iusto sed ea, dolorum
            eveniet amet eos!
          </div>
        </div>
      </div>
    )
}