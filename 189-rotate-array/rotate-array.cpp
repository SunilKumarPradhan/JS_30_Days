class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n=nums.size();
        k= k % n;

        reverse(nums.begin(),nums.end());
        reverse(nums.begin(),nums.begin()+k);
        reverse(nums.begin()+k,nums.end());
    }
};

/*
#include <bits/stdc++.h>
using namespace std;

vector<int> rotate_right(vector<int>arr,int k){
    int n=arr.size();
    vector<int>vr(arr.end()-k,arr.end());
    
    for(int i=n-1;i>=k;i--){
        arr[i]=arr[i-k];
    }
    
    for(int i=0;i<k;i++){
        arr[i]=vr[i];
    }
    return arr;
    
}

vector<int> rotate_left(vector<int>arr,int k){
    int n=arr.size();
    vector<int>vl(arr.begin(),arr.begin()+k);
    
    for(int i=0;i<n-k;i++){
        arr[i]=arr[i+k];
    }
    
    for(int i=0;i<k;i++){
        arr[n-k+i]=vl[i];
    }
    return arr;
}


int main() {
    vector<int> arr={1,2,3,4,5,6,7,8,9};
    int n=arr.size();
    int k=4;
    
    vector<int> right=rotate_right(arr,k);
    vector<int> left=rotate_left(arr,k);
    
    for(auto x:right){
        cout<<x<<" ";
    }
    cout<<endl;
    
    for(auto x:left){
        cout<<x<<" ";
    }
    
    return 0;
}
*/