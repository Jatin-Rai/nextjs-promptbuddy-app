

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                &copy; {currentYear} PromptBuddy. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;