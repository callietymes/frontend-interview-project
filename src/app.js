import './styles.scss'

/**
 * This is the app's entry point. Feel free to write your code here or create
 * separate files and import them using ES imports. Feel free to use ES2015 code,
 * including Object Rest/Spread.
 *
 * API:
 *
 * http://localhost:8001/authors
 * http://localhost:8001/books
 *
 * You can preview the JSON responses in api/db.json
 */

(function () {
    function MainController($scope) {
        const vm = this;
        fetch('http://localhost:8001/authors').then(function (results) {
            results.json().then((data) => {
                $scope.authors = data;
                $scope.$applyAsync();
            });
        });
        fetch('http://localhost:8001/books').then(function (results) {
            results.json().then((data) => {
                $scope.books = data;
                $scope.$applyAsync();
            });
        });

        $scope.authors.each((author) => {
            author.books = $scope.books.filter((book) => book.author_id === author.id);
        });
    }
})();
