import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {changeRating, activeRatingId} = props

      const onClickRatingItem = () => {
        changeRating(eachRating.ratingId)
      }

      const ratingClassName =
        activeRatingId === eachRating.ratingId
          ? 'active-rating'
          : 'non-active-rating'

      return (
        <li
          className="rating-item"
          onClick={onClickRatingItem}
          key={eachRating.ratingId}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list-container">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props

      const onClickCategoryItem = () => {
        changeCategory(category.categoryId)
      }

      const categoryClassName =
        category.categoryId === activeCategoryId
          ? 'active category'
          : 'category'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-items">{renderCategoriesList()}</ul>
    </div>
  )

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props

    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <div className="search-icon-container">
          <BsSearch />
        </div>
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilters()}
      <button type="button" onClick={clearFilters} className="clear-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
