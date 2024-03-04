const Bootstrap = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
            />


            <div class="jumbotron m-3">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                </p>
                <hr class="my-4" />
                <p>
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                </p>
                <a class="btn btn-primary btn-lg" href="#" role="button">
                    Learn more
                </a>
            </div>
        </>
    );
};

export default Bootstrap;
