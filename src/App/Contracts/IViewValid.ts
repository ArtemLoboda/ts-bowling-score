
interface IViewValid {
    /**
     * Indicate is form valid status
     */
    isValid(validationGroup?: string): boolean;
    /**
     * Show custom error
     */
    showErrorMessage():void;
}