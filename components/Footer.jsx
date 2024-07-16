

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col">
            <p className="my-1 text-base leading-6 text-center text-gray-400">
                &copy; {currentYear} PromptBuddy. All rights reserved.
            </p>
            <span className="text-center text-xs orange_gradient my-1">Creator - Jatin Rai</span>
        </footer>
    )
}

export default Footer;