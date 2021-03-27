/* Components */

// Initial Loader
const initLoader = () => {
    return `<div id="augrayCamLoader" class="fullPage alignCenter">
                <i class="acProgress"></i>
                <p>Loading...</p>
            </div>`;
};

// Camera Denied
const sectionCameraDenied = () => {
    return `<div id="section_camera_denied" class="deniedScreen fullPage alignCenter" style="display: none;">
                <h2>Unable to load the camera</h2>
                <div>
                    <p>There is a problem in your browser to enable the camera.</p>
                </div>
            </div>`;
};

    

// Main Wrapper
const wrapperContents = `${sectionCameraDenied()} ${initLoader()}`;
const loadingWrapper = `<div class="augrayCam">${wrapperContents}</div>`;

export {loadingWrapper};

