import React from 'react'


function Result() {
    return (
        <div class="col-lg-12">
            <div class="card dashboard-card-eleven">
                <div class="card-body">
                    <div class="heading-layout1">
                        <div class="item-title">
                            <h3>All Exam Results</h3>
                        </div>
                        <div class="dropdown">
                            <a class="dropdown-toggle" href="/" role="button" data-toggle="dropdown"
                                aria-expanded="false">...</a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="/"><i
                                        class="fas fa-times text-orange-red"></i>Close</a>
                                <a class="dropdown-item" href="/"><i
                                        class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                <a class="dropdown-item" href="/"><i
                                        class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                            </div>
                        </div>
                    </div>
                    <div class="table-box-wrap">
                        <form class="search-form-box">
                            <div class="row gutters-8">
                                <div class="col-lg-4 col-12 form-group">
                                    <input type="text" placeholder="Search by Exam ..."
                                        class="form-control" />
                                </div>
                                <div class="col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Subject ..."
                                        class="form-control" />
                                </div>
                                <div class="col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="dd/mm/yyyy"
                                        class="form-control" />
                                </div>
                                <div class="col-lg-2 col-12 form-group">
                                    <button type="submit"
                                        class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                </div>
                            </div>
                        </form>
                        <div class="table-responsive result-table-box">
                            <table class="table display data-table text-nowrap">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="form-check">
                                                <input type="checkbox"
                                                    class="form-check-input checkAll" />
                                                <label class="form-check-label">ID</label>
                                            </div>
                                        </th>
                                        <th>Exam Name</th>
                                        <th>Subject</th>
                                        <th>Grade</th>
                                        <th>Percent</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>English</td>
                                        <td>A</td>
                                        <td>99.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>English</td>
                                        <td>A</td>
                                        <td>99.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>Chemistry</td>
                                        <td>A</td>
                                        <td>99.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>English</td>
                                        <td>A</td>
                                        <td>99.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0025</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>Chemistry</td>
                                        <td>A</td>
                                        <td>99.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0025</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>Chemistry</td>
                                        <td>D</td>
                                        <td>70.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0025</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>English</td>
                                        <td>C</td>
                                        <td>80.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0025</label>
                                            </div>
                                        </td>
                                        <td>Class Test</td>
                                        <td>English</td>
                                        <td>B</td>
                                        <td>99.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0025</label>
                                            </div>
                                        </td>
                                        <td>First Semister</td>
                                        <td>English</td>
                                        <td>A</td>
                                        <td>99.00 > 100</td>
                                        <td>22/02/2019</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle"
                                                    data-toggle="dropdown" aria-expanded="false">
                                                    <span
                                                        class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i
                                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Result;