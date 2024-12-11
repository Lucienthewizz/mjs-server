document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    const teamMembers = document.querySelectorAll('.team-member');
    const memberInfo = document.getElementById('member-info');
    const memberName = document.getElementById('member-name');
    const memberImage = document.getElementById('member-image');
    const memberBio = document.getElementById('member-bio');
    const closeBtn = document.querySelector('.close-btn');
    const linkedinLink = document.getElementById('linkedin');
    const twitterLink = document.getElementById('twitter');

    const memberData = {
        adit: {
            name: 'Adit',
            role: 'Creative Director',
            bio: 'Adit is a visionary creative director with over 10 years of experience in branding and design. He leads our creative team with passion and innovation.',
            linkedin: 'https://www.linkedin.com/in/adit',
            twitter: 'https://twitter.com/adit'
        },
        lucien: {
            name: 'Lucien',
            role: 'Lead Developer',
            bio: 'Lucien is a full-stack developer with expertise in multiple programming languages. He ensures our projects are built with cutting-edge technology and best practices.',
            linkedin: 'https://www.linkedin.com/in/lucien',
            twitter: 'https://twitter.com/lucien'
        },
        tugus: {
            name: 'Tugus',
            role: 'UX Designer',
            bio: 'Tugus is a talented UX designer who creates intuitive and user-friendly interfaces. His designs enhance user experience and drive engagement across our projects.',
            linkedin: 'https://www.linkedin.com/in/tugus',
            twitter: 'https://twitter.com/tugus'
        },
        aris: {
            name: 'Aris',
            role: 'Project Manager',
            bio: 'Aris is an experienced project manager who ensures smooth execution of all our projects. His organizational skills and leadership keep our team on track and clients satisfied.',
            linkedin: 'https://www.linkedin.com/in/aris',
            twitter: 'https://twitter.com/aris'
        }
    };

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const memberKey = member.getAttribute('data-member');
            const data = memberData[memberKey];

            memberName.textContent = `${data.name} - ${data.role}`;
            memberImage.src = member.querySelector('img').src;
            memberImage.alt = data.name;
            memberBio.textContent = data.bio;
            linkedinLink.href = data.linkedin;
            twitterLink.href = data.twitter;

            memberInfo.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        memberInfo.classList.add('hidden');
    });

    // Simple form submission (you may want to add actual form submission logic)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});

