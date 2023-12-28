function Nav() {
    return (
      <div className="navbar bg-base-100 flex items-center justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none space-x-4 md:space-x-8 lg:space-x-12">
          <ul className="menu menu-horizontal px-1">
            
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>
                  Parent
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Nav;
  