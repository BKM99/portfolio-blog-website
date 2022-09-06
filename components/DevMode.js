const selectCommand = (command) => {
    switch (command.toLowerCase()) {
        case 'help':
            break;
        default:
            break;
    }
}

const devMode = () => {

    const prompt = "root@local-host: ~ $ "

    return (
        <div>
            <h1 className="bg-testColor h-screen text-white px-5">
                Welcome to dev mode!
                <div>
                    {prompt}
                    <textarea className="bg-testColor resize-none focus:outline-0"
                        data-gramm="false"
                        data-gramm_editor="false"
                        data-enable-grammarly="false"
                        id="textarea"
                        cols="30" rows="1"
                        placeholder="write here..."
                    />
                </div>
            </h1>
        </div>
    )
}

export default devMode;
