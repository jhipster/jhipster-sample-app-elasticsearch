package io.github.jhipster.sample.web.rest.errors;

import java.io.Serial;

@SuppressWarnings("java:S110") // Inheritance tree of classes should not be too deep
public class QuerySyntaxException extends BadRequestAlertException {

    @Serial
    private static final long serialVersionUID = 1L;

    public QuerySyntaxException() {
        super("Invalid query syntax!", "elasticsearch", "querySyntaxError");
    }
}
