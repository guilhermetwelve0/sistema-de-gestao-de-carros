import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "João Silva",
    role: "Cliente",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
    content:
      "Excelente experiência na compra do meu BMW. Atendimento impecável!",
  },
  {
    name: "Maria Santos",
    role: "Cliente",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    content: "Encontrei o carro dos meus sonhos por um preço justo. Recomendo!",
  },
  {
    name: "Pedro Costa",
    role: "Cliente",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
    content:
      "Processo de compra transparente e profissional. Muito satisfeito!",
  },
];

export default function TestimonialSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">
          O que nossos clientes dizem
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
