package io.github.jhipster.sample.repository.search;

import java.util.ArrayList;
import java.util.List;
import org.elasticsearch.search.sort.FieldSortBuilder;
import org.elasticsearch.search.sort.SortOrder;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.domain.Sort;

public class SortToFieldSortBuilderConverter implements Converter<Sort, List<FieldSortBuilder>> {

    @Override
    public List<FieldSortBuilder> convert(Sort sort) {
        List<FieldSortBuilder> builders = new ArrayList<>();
        sort
            .stream()
            .forEach(order -> {
                String property = order.getProperty() + ".keyword";
                SortOrder sortOrder = SortOrder.fromString(order.getDirection().name());
                builders.add(new FieldSortBuilder(property).order(sortOrder));
            });
        return builders;
    }
}
