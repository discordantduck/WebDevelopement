**Hui Lin**

**NetID: ti2236**

# Homework #1 Solution

## Question 1
## (a)
![repo_img.png](images/repo_img.png)
## (b)
![local_directory.png](images/local_directory.png)

## Question 2
## (a)
## (b) 
![local_directory.png](images/git_log.png)
## (c)
![local_directory.png](images/pushed.png)

## Question 3
## (a) 
## (b)

## Question 4
## (a)
* C++
* Java
* MIPS
## (b)
* Windows
* Linux
## (c)
* Codeblocks
* BluJay

# Question 5
## (a)
```c++
int binarySearch(int[] sorted, int n, int target)
{
    int lowerLim = 0;
    int upperLim = n;
    int mid = n / 2;

    while(sorted[mid] != target)
    {
        if(sorted[mid] < target)
        {
            upperLim = mid;
        }
        else
        {
            lowerLim = mid;
        }
        mid = lowerLim + upperLim / 2
    }

    return mid;
}
```
## (b)
Here's the link to [Bluejay](https://www.bluej.org/), an IDE for JAVA