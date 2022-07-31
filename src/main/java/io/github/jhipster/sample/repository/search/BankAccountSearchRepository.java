package io.github.jhipster.sample.repository.search;

import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;

import io.github.jhipster.sample.domain.BankAccount;
import io.github.jhipster.sample.repository.BankAccountRepository;
import java.util.stream.Stream;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Spring Data Elasticsearch repository for the {@link BankAccount} entity.
 */
public interface BankAccountSearchRepository extends ElasticsearchRepository<BankAccount, Long>, BankAccountSearchRepositoryInternal {}

interface BankAccountSearchRepositoryInternal {
    Stream<BankAccount> search(String query);

    Stream<BankAccount> search(Query query);

    void index(BankAccount entity);
}

class BankAccountSearchRepositoryInternalImpl implements BankAccountSearchRepositoryInternal {

    private final ElasticsearchRestTemplate elasticsearchTemplate;
    private final BankAccountRepository repository;

    BankAccountSearchRepositoryInternalImpl(ElasticsearchRestTemplate elasticsearchTemplate, BankAccountRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Stream<BankAccount> search(String query) {
        NativeSearchQuery nativeSearchQuery = new NativeSearchQuery(queryStringQuery(query));
        return search(nativeSearchQuery);
    }

    @Override
    public Stream<BankAccount> search(Query query) {
        return elasticsearchTemplate.search(query, BankAccount.class).map(SearchHit::getContent).stream();
    }

    @Override
    public void index(BankAccount entity) {
        repository.findOneWithEagerRelationships(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }
}
