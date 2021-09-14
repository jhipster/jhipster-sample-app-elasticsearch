package io.github.jhipster.sample.repository.search;

import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;

import io.github.jhipster.sample.domain.BankAccount;
import java.util.stream.Stream;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link BankAccount} entity.
 */
public interface BankAccountSearchRepository extends ElasticsearchRepository<BankAccount, Long>, BankAccountSearchRepositoryInternal {}

interface BankAccountSearchRepositoryInternal {
    Stream<BankAccount> search(String query);
}

class BankAccountSearchRepositoryInternalImpl implements BankAccountSearchRepositoryInternal {

    private final ElasticsearchRestTemplate elasticsearchTemplate;

    BankAccountSearchRepositoryInternalImpl(ElasticsearchRestTemplate elasticsearchTemplate) {
        this.elasticsearchTemplate = elasticsearchTemplate;
    }

    @Override
    public Stream<BankAccount> search(String query) {
        NativeSearchQuery nativeSearchQuery = new NativeSearchQuery(queryStringQuery(query));
        return elasticsearchTemplate.search(nativeSearchQuery, BankAccount.class).map(SearchHit::getContent).stream();
    }
}
