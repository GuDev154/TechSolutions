// Menu mobile
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            const navbar = document.querySelector('nav ul');
            const header = document.querySelector('header');
            
            if (mobileMenu) {
                mobileMenu.addEventListener('click', function() {
                    this.classList.toggle('active');
                    navbar.classList.toggle('active');
                });
            }
            
            // Fechar menu ao clicar em um link
            const navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    navbar.classList.remove('active');
                });
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', function() {
                    // Fechar outros itens abertos
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Alternar o item atual
                    item.classList.toggle('active');
                });
            });
            
            // Animação de scroll suave
            const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
            smoothScrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') return;
                    
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // WhatsApp message customization based on service
            const serviceLinks = document.querySelectorAll('.service-link, .btn.primary');
            serviceLinks.forEach(link => {
                if (link.href.includes('wa.me')) {
                    const originalHref = link.href;
                    
                    // Adicionar parâmetros UTM para rastreamento
                    const utmParams = '&utm_source=website&utm_medium=whatsapp_button&utm_campaign=service_request';
                    link.href = originalHref + utmParams;
                }
            });
        });