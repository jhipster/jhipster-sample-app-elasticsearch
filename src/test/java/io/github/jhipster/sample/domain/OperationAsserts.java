package io.github.jhipster.sample.domain;

import static io.github.jhipster.sample.domain.AssertUtils.bigDecimalCompareTo;
import static org.assertj.core.api.Assertions.assertThat;

public class OperationAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOperationAllPropertiesEquals(Operation expected, Operation actual) {
        assertOperationAutoGeneratedPropertiesEquals(expected, actual);
        assertOperationAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOperationAllUpdatablePropertiesEquals(Operation expected, Operation actual) {
        assertOperationUpdatableFieldsEquals(expected, actual);
        assertOperationUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOperationAutoGeneratedPropertiesEquals(Operation expected, Operation actual) {
        assertThat(expected)
            .as("Verify Operation auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOperationUpdatableFieldsEquals(Operation expected, Operation actual) {
        assertThat(expected)
            .as("Verify Operation relevant properties")
            .satisfies(e -> assertThat(e.getDate()).as("check date").isEqualTo(actual.getDate()))
            .satisfies(e -> assertThat(e.getDescription()).as("check description").isEqualTo(actual.getDescription()))
            .satisfies(
                e -> assertThat(e.getAmount()).as("check amount").usingComparator(bigDecimalCompareTo).isEqualTo(actual.getAmount())
            );
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOperationUpdatableRelationshipsEquals(Operation expected, Operation actual) {
        assertThat(expected)
            .as("Verify Operation relationships")
            .satisfies(e -> assertThat(e.getBankAccount()).as("check bankAccount").isEqualTo(actual.getBankAccount()))
            .satisfies(e -> assertThat(e.getLabels()).as("check labels").isEqualTo(actual.getLabels()));
    }
}
