
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
       int n=nums.size();
       
       set<int> st(nums.begin(),nums.end());// unique elements are stored in this

        int i=0;
       for(auto x:st){
        nums[i]=x;
        i++;
       }
       return st.size();
    }
};