class ModalModern extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render()
    {
        return (
            <div div class="modal-modern" >
                <label for="modal-1">
                    <div class="modal-trigger">{this.props.text}</div>
                </label>
                <input class="modal-state" id="modal-1" type="checkbox" />
                <div class="modal-fade-screen">
                    <div class="modal-inner">
                        <div class="modal-close" for="modal-1"></div>
                        <h1>{this.props.modal_text}</h1>
                        <p class="modal-intro">{this.props.modal_intro}</p>
                        <p class="modal-content">{this.props.modal_content}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalModern;