

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p class="my-8 text-base leading-6 text-center text-gray-400">
                &copy; {currentYear} PromptBuddy. All rights reserved.
            <span className="absolute bottom-0 right-20 text-xs orange_gradient my-8"> Creator - Jatin Rai</span>
            </p>
        </footer>
    )
}

export default Footer;