import React from 'react';
import '../style/components/service.css'; // Create a custom CSS file for styling

const services = [
  {
    title: 'Responsive Web Development',
    description:
      'Crafting user-friendly, responsive websites that deliver a seamless experience across all devices. Using modern technologies like React, HTML5, and CSS3 to create stunning, mobile-first designs.',
    icon: '📱',
  },
  {
    title: 'Web Hosting Solutions',
    description:
      'Providing fast and reliable web hosting services with uptime guarantees. Tailored hosting plans for your website’s needs, from small blogs to high-traffic e-commerce sites.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design (Photoshop)',
    description:
      'Designing beautiful and intuitive user interfaces with a focus on creating engaging user experiences. Professional designs using Photoshop that align with modern trends and user expectations.',
    icon: '🎨',
  },
  {
    title: 'Shopify Store Development',
    description:
      'Building custom, fully optimized Shopify stores to help you sell your products online. From store setup to advanced features like payment integration and inventory management.',
    icon: '🛒',
  },
  {
    title: 'WordPress Website Development',
    description:
      'Developing scalable, SEO-friendly WordPress websites. From theme customization to plugin development, I ensure your site meets all your needs and stands out from the competition.',
    icon: '🖥️',
  },
];

const Service = () => {
  return (
    <div id='services' className="services-container">
      <h2 className="services-header">My Web Development Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
