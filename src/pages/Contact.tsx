import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Briefcase, Mail, MessageSquare, Globe, Send } from 'lucide-react';

// Props de Title tipadas explicitamente
interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h2 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-16 pt-8 relative">
    <span className="text-gray-400 opacity-10 mr-1 tracking-widest text-[5rem] md:text-[8rem] absolute -top-10 left-1/2 transform -translate-x-1/2 z-0 whitespace-nowrap pointer-events-none">
      TOUCH
    </span>
    <span className="relative z-10">{title.toUpperCase()}</span>
  </h2>
);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Typagem explícita do evento de input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Tipagem explícita do evento de submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário aqui
    console.log('Dados do formulário:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen p-4 md:p-10 bg-gray-900 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <Title title="Get in Touch" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">NÃO SEJA TÍMIDO!</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Sinta-se à vontade para entrar em contato comigo. Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de suas visões.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Briefcase className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">ENDEREÇO</h4>
                  <p className="text-lg text-white">123 Street New York City, United States Of America 750065.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">ME ENVIE UM EMAIL</h4>
                  <p className="text-lg text-white">seu.email@exemplo.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">ME LIGUE</h4>
                  <p className="text-lg text-white">+55 (XX) 9XXXX-XXXX</p>
                </div>
              </div>
            </div>

            {/* Ícones Sociais */}
            <div className="flex space-x-4 mt-8">
              {['facebook', 'twitter', 'youtube', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition duration-300"
                  aria-label={`Link para ${social}`}
                >
                  <Globe size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Formulário de Contato */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="SEU NOME"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none border border-gray-700"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="SEU EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none border border-gray-700"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="ASSUNTO"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none border border-gray-700"
              required
            />
            <textarea
              name="message"
              placeholder="SUA MENSAGEM"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none border border-gray-700 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="group flex items-center py-3 px-6 text-sm font-bold text-gray-900 bg-yellow-500 rounded-full uppercase tracking-wider shadow-lg hover:shadow-yellow-500/50 transition duration-300 transform hover:scale-[1.02]"
            >
              ENVIAR MENSAGEM
              <span className="ml-3 p-1 bg-gray-900 rounded-full group-hover:bg-gray-800 transition">
                <Send className="text-yellow-500" size={16} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
